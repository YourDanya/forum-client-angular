import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary} from 'src/app/_components/_layout/nav/nav.content'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'
import {Location} from '@angular/common'
import {Lang} from 'src/app/_common/types/translation/lang.type'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [TranslationService]
})
export class HomeComponent {
}
