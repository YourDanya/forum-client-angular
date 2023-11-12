import {Component, ElementRef, ViewChild} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {dictionary} from 'src/app/_components/_layout/nav/nav.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'

@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [TranslationService]
})
export class NavComponent {
    translation: Translation<typeof dictionary>
    searchValue = ''
    modalActive = false

    constructor(private translationService: TranslationService) {
        this.translation = this.translationService.translate(dictionary)
    }

    onSearchChange(event: InputEvent) {
        this.searchValue = event.currentTarget.value
    }

    onLoginClick() {
        this.modalActive = true
    }

    onCloseModal() {
        this.modalActive = false
    }
}
