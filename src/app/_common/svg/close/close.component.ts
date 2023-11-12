import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-close-svg',
    templateUrl: 'close.component.html',
    styleUrls: ['close.styles.sass']
})
export class CloseSvgComponent {
    @Input()
    class: string
}
