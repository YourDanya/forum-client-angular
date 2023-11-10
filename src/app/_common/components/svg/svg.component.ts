import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {Input} from '@angular/core'

@Component({
    selector: 'app-spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['spinner.styles.sass'],
    encapsulation: ViewEncapsulation.Emulated
})
export class SpinnerComponent {
    @Input() class = ''
}
