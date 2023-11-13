import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core'

@Component({
    selector: 'app-modal-content',
    templateUrl: 'modal-content.component.html',
    styleUrls: ['modal-content.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class ModalContentComponent {
    @Input() class = ''

    @Input() active = false

    @Output() closeEvent = new EventEmitter()

    onClose () {
        this.closeEvent.emit()
    }
}
