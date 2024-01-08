import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {Validator} from 'src/app/_common/utils/form/validation/validator.class'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {
    dictionary,
    initValues,
    validations
} from 'src/app/profile/settings/update-email/change-email/change-email.content'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'

@Component({
    selector: 'app-profile-change-email',
    templateUrl: 'change-email.component.html',
    styleUrls: ['change-email.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class ChangeEmailComponent {
    values = {...initValues}
    errors = {...initValues}
    serverError = ''
    lang: Lang
    loading: false
    translation: Translation<typeof dictionary>

    @Input()
    shouldConfirm: boolean
    @Output()
    shouldConfirmChange = new EventEmitter<true>()

    constructor(
        public validator: Validator,
        public userApiService: UserApiService,
        public translationService: TranslationService,
        public validationService: ValidationService<typeof initValues>
    ) {
        this.translation = translationService.translate(dictionary)

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
        this.userApiService.changeEmail(this.values).subscribe({
            next: this.onSuccess,
            error: this.onError
        })
    }

    onError = (error: Error) => {
        this.serverError = error.message
        this.loading = false
    }
    onSuccess = () => {
        this.shouldConfirmChange.emit(true)
    }
}
