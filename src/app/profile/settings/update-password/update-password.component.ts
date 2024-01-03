import {Component, ViewEncapsulation} from '@angular/core'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {dictionary} from 'src/app/profile/settings/update-password/update-password.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
@Component({
    selector: 'app-update-password',
    templateUrl: 'update-password.component.html',
    styleUrls: ['update-password.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class UpdatePasswordComponent {
    translation: Translation<typeof dictionary>
    constructor(public translationService: TranslationService) {
        this.translationService.translate(dictionary)
    }
}
