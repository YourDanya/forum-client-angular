import {Component} from '@angular/core'
import {Input} from '@angular/core'

@Component({
    selector: 'app-modal-content',
    templateUrl: 'modal-content.component.html',
    styleUrls: ['modal-content.styles.sass']
})
export class ModalContentComponent {
    @Input() class = ''

    @Input() active = false
}
