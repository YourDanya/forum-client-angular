import {Component, ViewEncapsulation} from '@angular/core'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary} from 'src/app/profile/settings/settings.content'
import {Translation} from 'src/app/_common/types/translation/translation.types'

@Component({
    selector: 'app-profile-settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class SettingsComponent {
    translation: Translation<typeof dictionary>
    constructor(public translationService: TranslationService) {
        this.translationService.translate(dictionary)
    }
}
