import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-ava-svg',
    templateUrl: 'ava.component.html',
    styleUrls: ['ava.styles.sass']
})
export class AvaSvgComponent {
    @Input()
    class: string
}
