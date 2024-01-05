import {Component, ViewEncapsulation} from '@angular/core'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {dictionary} from 'src/app/profile/settings/delete-user/delete-user.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'

@Component({
    selector: 'app-delete-user',
    templateUrl: 'delete-user.component.html',
    styleUrls: ['delete-user.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class DeleteUserComponent {
    translation: Translation<typeof dictionary>
    constructor(public translationService: TranslationService) {
        this.translationService.translate(dictionary)
    }
}
