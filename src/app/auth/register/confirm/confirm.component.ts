import {Component, ViewEncapsulation} from '@angular/core'
import {ValidationService } from 'src/app/_common/utils/form/validation/validation.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {dictionary, initValues, validations} from 'src/app/auth/register/confirm/confirm.content'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'
import {HttpErrorResponse} from '@angular/common/http'
import {Timer} from 'src/app/_common/utils/helpers/timer/timer.util'

@Component({
    selector: 'app-confirm-register',
    templateUrl: 'confirm.component.html',
    styleUrls: ['./confirm.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [Timer, ValidationService],
})
export class ConfirmComponent {
    values = {...initValues}
    errors = {...initValues}

    translation: Translation<typeof dictionary>
    resendLoading = false
    confirmLoading = false
    confirmError = ''
    confirmSuccess = ''

    constructor(
        public translationService: TranslationService,
        public userApiService: UserApiService,
        public validationService: ValidationService<{code: string}>,
        public timer: Timer
    ) {
        this.translation = this.translationService.translate(dictionary)
        this.validationService.values = this.values
        this.validationService.validations = {...validations}
        this.validationService.errors = this.errors
    }

    onChange(event: InputEvent) {
        const {value, name} = inputChange<{ code: string }>(event)
        this.values[name] = value
    }

    onResend(event: Event) {
        event.preventDefault()
        if (this.resendLoading) {
            return
        }
        this.resendLoading = true
        this.userApiService.sendRegisterCode().subscribe({
            error: this.onResendError,
            next: this.onResendSucces
        })
    }

    onResendSucces = () =>  {
        this.resendLoading = false
    }

    onResendError = () => {
        this.resendLoading = false
    }

    onConfirm(event: Event) {
        event.preventDefault()

        this.validationService.validateAll()

        if (this.confirmLoading || this.validationService.errorsCount > 0) {
            return
        }

        this.confirmLoading = true
        this.userApiService.confirmRegisterEmail(this.values).subscribe({
            error: this.onConfirmError,
            next: this.onConfirmSuccss
        })
    }

    onConfirmError = (error: HttpErrorResponse) => {
        this.confirmLoading = false
        this.confirmError = error.error.message
    }

    onConfirmSuccss = (res: {message: string}) => {
        this.confirmLoading = false
        this.confirmSuccess = res.message
    }

    ngOnInit() {
        this.timer.timer$.subscribe((value) => console.log('value', value))
    }
}
