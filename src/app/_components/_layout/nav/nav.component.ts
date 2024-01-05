import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {dictionary} from 'src/app/_components/_layout/nav/nav.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import {NavigationStart, Router} from '@angular/router'
import {filter, map} from 'rxjs'
import {User} from 'src/app/_common/types/user/user.type'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'

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

    @ViewChild('dropdownButton', {read: ElementRef}) button: ElementRef
    @ViewChild('userMenuDiv') menu: ElementRef

    constructor(
        private translationService: TranslationService,
        private router: Router,
        private renderer: Renderer2,
        private userStoreService: UserStoreService
    ) {
        this.translation = this.translationService.translate(dictionary)
        this.renderer.listen('window', 'click', this.onDropdownClick)
    }

    onDropdownClick = (event: Event) => {
        if (this.menu && this.menu.nativeElement.contains(event.target)) {
            if ((event.target as Element).className.includes('menu__option')) {
                this.accountMenuShown = false
            }
            return
        }

        if (!this.button.nativeElement.contains(event.target) || this.accountMenuShown) {
            this.accountMenuShown = false
        } else {
            this.accountMenuShown = true
        }
    }

    ngOnInit() {
        this.checkHide(this.router.url)

        this.router.events.pipe(
            filter(event => event instanceof NavigationStart),
            map(event => event as NavigationStart),
        ).subscribe((event) => {
            this.checkHide(event.url)
        })

        this.userStoreService.user$.subscribe((user) => {
            this.user = user
        })
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

    checkHide(url: string) {
        this.hide = url.includes('auth')
    }
}
