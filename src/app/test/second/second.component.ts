import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {initValues} from 'src/app/test/second/second.content'
import {ChangeValue} from 'src/app/_common/types/form/change-value.type'
import {TestService} from 'src/app/test/test.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'

@Component({
    selector: 'app-test-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class SecondComponent {
    values = {...initValues}

    onChange (event: InputEvent) {
        const {name, value} = inputChange<typeof initValues>(event)
        this.values[name] = value
        this.testService.secondValues = this.values
    }

    constructor(private testService: TestService) {}
}
