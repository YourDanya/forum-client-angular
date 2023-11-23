import {Component, EventEmitter, Input, Output} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary, initErrors, initValues, validations} from 'src/app/auth/register/register-form/register-form.content'
import {InputErrors} from 'src/app/_common/types/form/input-errors.type'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'

@Component({
    selector: 'app-register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['./register-form.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [ValidationService],
})
export class RegisterFormComponent {
    translation: Translation<typeof dictionary>

    values = {...initValues}
    errors: InputErrors<typeof initErrors> = {...initErrors}
    loading = false

    @Input()
    shouldConfirm: boolean

    @Output()
    shouldConfirmChange = new EventEmitter<true>()

    constructor(
        private translationService: TranslationService,
        private validationService: ValidationService<typeof initValues>,
        private userApiService: UserApiService
    ) {
        this.translation = this.translationService.translate(dictionary)

        this.validationService.values = this.values
        this.validationService.errors = this.errors
        this.validationService.validations = validations
    }

    onChange(event: InputEvent) {
        const {name, value} = inputChange<typeof initValues>(event)
        this.values[name] = value
        this.validationService.validateOne({name})
    }

    onSubmit(event: Event) {
        event.preventDefault()
        this.validationService.validateAll()

        if (this.validationService.errorsCount !== 0) {
            return
        }

        this.loading = true

        this.userApiService.register(this.values).subscribe({
            next: this.onRegisterSuccess.bind(this),
            error: this.onRegisterError.bind(this)
        })
    }

    onRegisterSuccess () {
        this.loading = false
        this.shouldConfirm = true
        this.shouldConfirmChange.emit(this.shouldConfirm)
    }

    onRegisterError() {
        this.loading = false
    }
}
