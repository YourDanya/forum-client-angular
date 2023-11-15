import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary, initErrors, initValues, validations} from 'src/app/auth/register/register.content'
import {InputErrors} from 'src/app/_common/types/form/input-errors.type'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [ValidationService],
})
export class RegisterComponent {
    translation: Translation<typeof dictionary>

    values = {...initValues}
    errors: InputErrors<typeof initErrors> = {...initErrors}

    constructor(
        private translationService: TranslationService,
        private validationService: ValidationService<typeof initValues>
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

        if (this.validationService.errorsCount === 0) {
            console.log('submitting')
        }
    }
}
