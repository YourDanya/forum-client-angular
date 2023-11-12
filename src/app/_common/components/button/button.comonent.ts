import {Component, EventEmitter, Output} from '@angular/core'
import {Input} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'

@Component({
    selector: 'app-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
    @Input() loading = false;
    @Input() class = ''

    @Output() clickEvent = new EventEmitter<Event>()

    onClick (event: Event) {
        this.clickEvent.emit(event)
    }
}
