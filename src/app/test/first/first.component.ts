import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {initValues} from 'src/app/test/first/first.content'
import {ChangeValue} from 'src/app/_common/types/form/change-value.type'
import {TestService} from 'src/app/test/test.service'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'

@Component({
    selector: 'app-test-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class FirstComponent {
    public values = {...initValues}

    onChange (event: InputEvent) {
        const {name, value} = inputChange<typeof initValues>(event)
        this.values[name] = value
        this.testService.firstValues = this.values
    }

    constructor(private testService: TestService) {}
}


