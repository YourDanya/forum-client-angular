import {Component, EventEmitter, Injectable, Input, Output, ViewEncapsulation} from '@angular/core'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {dictionary, emailValidations} from 'src/app/profile/settings/update-email/update-email.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {initValues} from 'src/app/_components/_layout/nav/auth/auth.content'
import {Validator} from 'src/app/_common/utils/form/validation/validator.class'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {Location} from '@angular/common'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'

@Component({
    selector: 'app-update-email',
    templateUrl: 'update-email.component.html',
    styleUrls: ['update-email.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class UpdateEmailComponent {
    translation: Translation<typeof dictionary>
    lang: Lang
    shouldConfirm = true

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
    }
}




