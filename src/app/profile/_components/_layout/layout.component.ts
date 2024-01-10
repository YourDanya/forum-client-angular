import {Component, ViewEncapsulation} from '@angular/core'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary} from 'src/app/profile/_components/_layout/layout.content'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {Location} from '@angular/common'
import {User} from 'src/app/_common/types/user/user.type'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'
import {Router} from '@angular/router'

@Component({
    selector: 'app-profile-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
    lang: Lang
    translation: Translation<typeof dictionary>
    user: User
    menuActiveLink : string
    constructor(
        public translationSerice: TranslationService,
        public location: Location,
        public userStoreService: UserStoreService,
        public router: Router
    ) {
        this.translation = this.translationSerice.translate(dictionary)
        const locationArr = this.location.path().split('/')
        this.lang = locationArr[1] as Lang
        this.menuActiveLink = locationArr[3]

        if (!this.menuActiveLink) {
            this.menuActiveLink = 'settings'
            this.router.navigate([`/${this.lang}/profile/settings`])
            console.log('should go')
        }

        this.userStoreService.user$.subscribe((user) => {
            if (!user) {
                if (user === null) {
                    this.isNotLogged()
                }
                return
            }
            this.user = user
        })
    }

    isNotLogged() {
        this.location.go(`/${this.lang}/auth/login`)
    }
}
