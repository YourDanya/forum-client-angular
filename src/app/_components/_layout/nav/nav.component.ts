import {Component, ElementRef, ViewChild} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {dictionary} from 'src/app/_components/_layout/nav/nav.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import {ActivatedRoute, NavigationStart, Router} from '@angular/router'
import {filter, map} from 'rxjs'

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

    constructor(
        private translationService: TranslationService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.translation = this.translationService.translate(dictionary)
    }

    ngOnInit() {
        const test = this.router.routerState.snapshot
        console.log('test', test)

        this.router.events.pipe(
            filter(event => event instanceof NavigationStart),
            map(event => event as NavigationStart),
            filter(event => event.url === '/')
        ).subscribe((event) => {
            console.log('redirect', event)
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
}
