import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {dictionary, initValues, validations} from 'src/app/profile/settings/update-password/update-password.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {Validator} from 'src/app/_common/utils/form/validation/validator.class'
import {Location} from '@angular/common'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'

@Component({
    selector: 'app-update-password',
    templateUrl: 'update-password.component.html',
    styleUrls: ['update-password.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class UpdatePasswordComponent {
    translation: Translation<typeof dictionary>
    lang: Lang
    values = {...initValues}
    errors = {...initValues}
    serverError = ''
    loading: false

    @Input()
    modalActive = false
    @Output()
    closeEvent = new EventEmitter()

    constructor(
        public translationService: TranslationService,
        public validator: Validator,
        public location: Location,
        public validationService: ValidationService<typeof initValues>,
        public userApiService: UserApiService,
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
        this.userApiService.updatePassword(this.values).subscribe({
            next: this.onSuccess,
            error: this.onError
        })
    }

    onError = (error: Error) => {
        this.serverError = error.message
        this.loading = false
    }

    onSuccess = () => {
        setTimeout(() => {
            this.closeEvent.emit()
        })
    }

    onClose() {
        this.closeEvent.emit()
    }
}
