import {Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {dictionary} from 'src/app/_components/_layout/nav/auth/auth.content'
import {initErrors} from 'src/app/_components/_layout/nav/auth/auth.content'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'
import {initValues} from 'src/app/_components/_layout/nav/auth/auth.content'
import {validations} from 'src/app/_components/_layout/nav/auth/auth.content'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import {InputErrors} from 'src/app/_common/types/form/input-errors.type'

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['auth.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [ValidationService]
})
export class AuthComponent {
    @Input()
    modalActive = false

    values = {...initValues}
    errors: InputErrors<typeof initErrors> = {...initErrors}
    translation: Translation<typeof dictionary>
    submitActive = false

    @Output()
    closeEvent = new EventEmitter()

    constructor(
        private route: ActivatedRoute,
        private validationService: ValidationService<typeof initValues>
    ) {
        const lang = <Lang> this.route.snapshot.paramMap.get('lang')
        this.translation = dictionary[lang]
        this.validationService.values = this.values

        this.validationService.errors = {...initErrors}
        this.validationService.validations = validations
        this.validationService.validateAll()
    }

    onChange (event: InputEvent) {
        const {name, value} = inputChange<typeof initValues>(event)
        this.values[name] = value

        this.validationService.validateOne({name})
        this.errors[name] = this.validationService.errors[name]

        this.submitActive = this.validationService.errorsCount === 0
    }

    onSubmit () {
        if (this.submitActive) {
            console.log('submitting')
        }
    }

    onClose () {
        this.closeEvent.emit()
    }
}
