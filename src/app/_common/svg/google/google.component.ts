import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-google-svg',
    templateUrl: 'google.component.html',
    styleUrls: ['google.styles.sass']
})
export class GoogleSvgComponent {
    @Input()
    class: string
}
