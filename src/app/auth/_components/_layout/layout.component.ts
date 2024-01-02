import {Component, ViewEncapsulation} from '@angular/core'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary} from 'src/app/auth/_components/_layout/layout.content'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {Location} from '@angular/common'
import {User} from 'src/app/_common/types/user/user.type'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'

@Component({
    selector: 'app-auth-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.styles.sass', '../../auth.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
    user: User | null | undefined = undefined
    translation: Translation<typeof dictionary>
    lang: Lang

    constructor(
        public userStoreService: UserStoreService,
        public translationService: TranslationService,
        public userApiService: UserApiService,
        public location: Location
    ) {
        this.translation = this.translationService.translate(dictionary)
        this.lang = location.path().split('/')[1] as Lang

        this.userStoreService.user$.subscribe((user) => {
            this.user = user
            if (user) {
                this.isLogged()
            }
        })
    }

    isLogged() {
        setTimeout(() => {
            this.location.go(`/${this.lang}`)
        }, 5000)
    }
}
