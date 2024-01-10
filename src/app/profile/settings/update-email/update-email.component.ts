import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {dictionary} from 'src/app/profile/settings/update-email/update-email.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
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
    shouldConfirm = false

    @Input()
    modalActive = false
    @Output()
    closeEvent = new EventEmitter()

    constructor(
        public translationService: TranslationService,
        public validator: Validator,
        public location: Location
    ) {
        this.translation = this.translationService.translate(dictionary)
    }
    
    onClose() {
        this.closeEvent.emit()
        if (this.shouldConfirm) {
            this.shouldConfirm = false
        }
    }
}




