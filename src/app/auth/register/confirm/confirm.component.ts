import {Component, ViewEncapsulation} from '@angular/core'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {dictionary} from 'src/app/auth/register/confirm/confirm.content'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'
import {HttpErrorResponse} from '@angular/common/http'

@Component({
    selector: 'app-confirm-register',
    templateUrl: 'confirm.component.html',
    styleUrls: ['./confirm.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [ValidationService],
})
export class ConfirmComponent {
    code = ''
    translation: Translation<typeof dictionary>
    resendLoading = false
    confirmLoading = false
    constructor(
        public translationService: TranslationService,
        public userApiService: UserApiService
    ) {
        this.translation = this.translationService.translate(dictionary)
    }

    onChange(event: InputEvent) {
        const {value} = inputChange<{code: string}>(event)
        this.code = value
    }

    onResend() {
        if (this.resendLoading) {
            return
        }
        this.resendLoading = true
        this.userApiService.sendRegisterCode().subscribe({
            error: this.onResendError.bind(this),
            next: this.onResendSucces.bind(this)
        })
    }
    onResendSucces () {
        this.resendLoading = false
    }
    onResendError() {
        this.resendLoading = false
    }

    onConfirm() {
        if (!this.confirmLoading) {
            return
        }
        this.confirmLoading = true
        this.userApiService.confirmRegisterEmail({code: this.code}).subscribe({
            error: this.onConfirmError.bind(this),
            next: this.onConfirmSuccss.bind(this)
        })
    }

    onConfirmError(error: HttpErrorResponse) {
        this.confirmLoading = false
    }

    onConfirmSuccss() {
        this.confirmLoading = false
    }
}
