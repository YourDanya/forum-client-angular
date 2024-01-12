import {Component, ViewEncapsulation} from '@angular/core'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {Validator} from 'src/app/_common/utils/form/validation/validator.class'
import {Location} from '@angular/common'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {dictionary, initValues, validations} from 'src/app/profile/about/about.content'

@Component({
    selector: 'app-profile-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [ValidationService]
})
export class AboutComponent {
    translation: Translation<typeof dictionary>
    lang: Lang
    values = {...initValues}
    errors = {...initValues}
    serverError = ''
    loading: false
    success = ''

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
        if (this.loading) {
            return
        }

        this.validationService.validateAll()
        if (this.validationService.errorsCount !== 0) {
            return
        }

        this.userApiService.updateUser(this.values).subscribe({
            next: this.onSuccess,
            error: this.onError
        })
    }

    onError = (error: Error) => {
        this.serverError = error.message
        this.loading = false
    }

    onSuccess = (res: {message: string}) => {
        this.loading = false
        this.serverError = ''
        this.success = res.message
        this.values = {...initValues}
    }
}
