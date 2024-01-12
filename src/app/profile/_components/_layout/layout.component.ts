import {Component, ViewEncapsulation} from '@angular/core'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary} from 'src/app/profile/_components/_layout/layout.content'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {Location} from '@angular/common'
import {User} from 'src/app/_common/types/user/user.type'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'
import {NavigationStart, Router} from '@angular/router'
import {filter, map, Subscription} from 'rxjs'

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
    routerSubscribtion: Subscription
    constructor(
        public translationSerice: TranslationService,
        public location: Location,
        public userStoreService: UserStoreService,
        public router: Router
    ) {
        this.translation = this.translationSerice.translate(dictionary)

        this.checkUrl(router.url)

        this.routerSubscribtion = this.router.events.pipe(
            filter(event => event instanceof NavigationStart),
            map(event => event as NavigationStart),
        ).subscribe((event) => {
            this.checkUrl(event.url)
        })

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

    checkUrl (url: string) {
        const urlArr = url.split('/')

        if (urlArr[1] !== 'en' &&  urlArr[1] !== 'ru' || urlArr[2] !== 'profile') {
            return
        }

        this.lang = urlArr[1]
        this.menuActiveLink = urlArr[3]

        if (!this.menuActiveLink) {
            this.menuActiveLink = 'settings'
            this.router.navigate([`/${this.lang}/profile/settings`], {replaceUrl: true})
        }
    }

    isNotLogged() {
        this.router.navigate([`/${this.lang}/auth/login`])
    }

    ngOnDestroy() {
        this.routerSubscribtion.unsubscribe()
    }
}
