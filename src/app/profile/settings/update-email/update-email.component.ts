import {Component, ViewEncapsulation} from '@angular/core'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {dictionary} from 'src/app/profile/settings/update-email/update-email.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'

@Component({
    selector: 'app-update-email',
    templateUrl: 'update-email.component.html',
    styleUrls: ['update-email.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class UpdateEmailComponent {
    translation: Translation<typeof dictionary>
    constructor(public translationService: TranslationService) {
        this.translationService.translate(dictionary)
    }
}
