import {Component, ViewEncapsulation} from '@angular/core'
import {Input} from '@angular/core'
import {Output} from '@angular/core'
import {EventEmitter} from '@angular/core'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'

@Component({
    selector: 'app-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class InputComponent {
    @Input() name: string
    @Input() error = ''
    @Input() placeholder = ''
    @Input() label = ''
    @Input() type = 'text'
    @Input() class = ''
    @Input() value: string | number

    @Output() changeEvent = new EventEmitter<InputEvent>()

    focused = false

    onChange(event: Event) {
        this.changeEvent.emit(event as InputEvent)
    }

    onFocus(event: Event) {
        this.focused = true
    }

    onBlur(event: Event) {
        this.focused = false
    }

}
