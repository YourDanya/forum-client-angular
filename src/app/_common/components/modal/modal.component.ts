import {Component, EventEmitter, Output} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {Input} from '@angular/core'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.styles.sass'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ModalComponent {
    @Input() active = false

    @Output() closeEvent = new EventEmitter()

    onClose () {
        this.closeEvent.emit()
    }
}
