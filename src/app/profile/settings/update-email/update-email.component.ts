import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {dictionary, emailValidations} from 'src/app/profile/settings/update-email/update-email.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {initValues} from 'src/app/_components/_layout/nav/auth/auth.content'
import {Validator} from 'src/app/_common/utils/form/validation/validator.class'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {Location} from '@angular/common'

@Component({
    selector: 'app-update-email',
    templateUrl: 'update-email.component.html',
    styleUrls: ['update-email.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class UpdateEmailComponent {
    translation: Translation<typeof dictionary>
    lang: Lang
    emailChanger: EmailChanger
    codeSender: CodeSender

    @Input()
    modalActive = false

    @Output()
    closeEvent = new EventEmitter()
    constructor(
        public translationService: TranslationService,
        public validator: Validator,
        public location: Location,
    ) {
        this.translation = this.translationService.translate(dictionary)
        const lang = this.location.path().split('/')[1] as Lang
        this.emailChanger = new EmailChanger(validator, lang)
        this.codeSender = new CodeSender(validator, lang)
    }

    onClose() {
        this.closeEvent.emit()
    }
}

class EmailChanger {
    value = ''
    validateError = ''
    serverError = ''
    constructor(public validator: Validator, public lang : Lang) {}
    onChange(event: InputEvent) {
        this.value = event.currentTarget.value
        this.onValidate()
    }
    onValidate() {
        this.validateError = this.validator.validateOne({
            validations: emailValidations, value: this.value, lang: this.lang
        })
    }
    onSubmit() {
        this.onValidate()
        if (!this.validateError) {

        }
    }
}

class CodeSender {
    value = ''
    validateError = ''
    serverError = ''
    shouldConfirm = false
    constructor(public validator: Validator, public lang : Lang) {}
    onChange(event: InputEvent) {
        this.value = event.currentTarget.value
        this.onValidate()
    }
    onValidate() {
        this.validateError = this.validator.validateOne({
            validations: emailValidations, value: this.value, lang: this.lang
        })
    }
    onSubmit() {
       this.onValidate()
    }
}
