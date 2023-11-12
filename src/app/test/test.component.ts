import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {Item} from 'src/app/test/test.types'
import {TestService} from 'src/app/test/test.service'
import {SkipSelf} from '@angular/core'

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [{provide: TestService}]
})
export class TestComponent {
    items = [{id: 1, text: 'vwniagreoi'}, {id: 2, text: 'vnawirovaetrk'}, {id: 3, text: 'vaer8ugjoaeggtiu'}]
    check = false

    constructor(@SkipSelf() private testService: TestService) {}

    toItem = (item: any) => item as Item

    onCheck () {
        this.check = !this.check
    }

    onClick () {
        const {secondValues, firstValues} = this.testService
        let values = {...secondValues, ...firstValues}
    }
}

