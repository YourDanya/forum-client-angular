import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {dictionary} from 'src/app/_components/_layout/nav/nav.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import {NavigationStart, Router} from '@angular/router'
import {filter, map, Subscription} from 'rxjs'
import {User} from 'src/app/_common/types/user/user.type'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {Location} from '@angular/common'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'

@Component({
    selector: 'app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.styles.sass'],
    encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
    translation: Translation<typeof dictionary>
    searchValue = ''
    modalActive = false
    hide = false
    accountMenuShown = false
    user: User | null | undefined
    lang: Lang
    routerSubscription: Subscription

    @ViewChild('dropdownButton', {read: ElementRef}) button: ElementRef
    @ViewChild('userMenuDiv') menu: ElementRef

    constructor(
        public translationService: TranslationService,
        public router: Router,
        public renderer: Renderer2,
        public userStoreService: UserStoreService,
        public location: Location,
        public userApiService: UserApiService
    ) {
        this.translation = this.translationService.translate(dictionary)
        this.renderer.listen('window', 'click', this.onDropdownClick)
        this.lang = location.path().split('/')[1] as Lang
    }

    onDropdownClick = (event: Event) => {
        if (this.menu && this.menu.nativeElement.contains(event.target)) {
            if ((event.target as Element).className.includes('menu__option')) {
                this.accountMenuShown = false
            }
            return
        }

        let contains = false
        if (this.button) {
            contains = this.button.nativeElement.contains(event.target)
        }

        if (!this.accountMenuShown && contains) {
            this.accountMenuShown = true
        } else if (this.accountMenuShown) {
            this.accountMenuShown = false
        }
    }

    ngOnInit() {
        this.checkHide(this.router.url)

        this.routerSubscription = this.router.events.pipe(
            filter(event => event instanceof NavigationStart),
            map(event => event as NavigationStart),
        ).subscribe((event) => {
            this.checkHide(event.url)
        })

        this.userStoreService.user$.subscribe((user) => {
            this.user = user
        })
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe()
    }

    onSearchChange(event: InputEvent) {
        this.searchValue = event.currentTarget.value
    }

    onLoginClick() {
        this.modalActive = true
    }

    onLogoutClick = () => {
        this.userApiService.logout().subscribe({
            next: () => {
                this.userStoreService.setUser(null)
            }
        })
    }

    onCloseModal() {
        this.modalActive = false
    }

    checkHide(url: string) {
        this.hide = url.includes('auth')
    }
}
