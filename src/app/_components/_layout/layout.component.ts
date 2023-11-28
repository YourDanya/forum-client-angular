import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {NavComponent} from 'src/app/_components/_layout/nav/nav.component'

@Component({
    selector: 'app-_layout',
    templateUrl: './layout.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {}
