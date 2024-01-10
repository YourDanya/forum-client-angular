import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {dictionary} from 'src/app/profile/settings/update-email/confirm-email/confirm-email.content'
import {initValues, validations} from 'src/app/auth/register/confirm/confirm.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'
import {Timer} from 'src/app/_common/utils/helpers/timer/timer.util'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'
import {Location} from '@angular/common'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {User} from 'src/app/_common/types/user/user.type'

@Component({
    selector: 'app-profile-confirm-email',
    templateUrl: 'confirm-email.component.html',
    styleUrls: ['confirm-email.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [Timer, ValidationService]
})
export class ConfirmEmailComponent {
    values = {...initValues}
    errors = {...initValues}

    translation: Translation<typeof dictionary>
    resendLoading = false
    confirmLoading = false
    confirmError = ''
    confirmSuccess = ''
    canResend = true
    time: string

    @Output()
    closeEvent = new EventEmitter()

    constructor(
        public translationService: TranslationService,
        public userApiService: UserApiService,
        public validationService: ValidationService<{code: string}>,
        public timer: Timer,
        public userStoreService: UserStoreService,
        public location: Location,
    ) {
        this.translation = this.translationService.translate(dictionary)
        this.validationService.values = this.values
        this.validationService.validations = {...validations}
        this.validationService.errors = this.errors
    }

    onChange(event: InputEvent) {
        const {value, name} = inputChange<{ code: string }>(event)
        this.values[name] = value
        this.validationService.validateOne({name})
    }

    onResend(event: Event) {
        event.preventDefault()
        this.send()
    }

    send = () => {
        if (this.resendLoading || !this.canResend) {
            return
        }
        this.resendLoading = true

        this.userApiService.sendChangeEmailCode().subscribe({
            error: this.onResendError,
            next: this.onResendSucces
        })
    }

    onResendSucces = (data: {message: string, timer: number}) =>  {
        this.resendLoading = false
        this.timer.start(data.timer)
        this.canResend = false
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
        this.userApiService.confirmChangeEmail(this.values).subscribe({
            error: this.onConfirmError,
            next: this.onConfirmSuccss
        })
        this.closeEvent.emit()
    }

    onConfirmError = (error: Error) => {
        this.confirmLoading = false
        this.confirmError = error.message
    }

    onConfirmSuccss = (res: {message: string, user: User}) => {
        this.confirmLoading = false
        this.confirmSuccess = res.message
        this.confirmError = ''

        this.userStoreService.setUser(res.user)

        this.closeEvent.emit()
    }

    ngOnInit() {
        this.timer.timer$.subscribe((time) => {
            if (time === '00:00') {
                this.canResend = true
            }
            this.time = time
        })

        // this.send()
    }
}
