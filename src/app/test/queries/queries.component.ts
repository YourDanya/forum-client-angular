import {Component, ViewEncapsulation} from '@angular/core'
import {ThreadsApiService} from 'src/app/_common/api/threads/threads-api.service'

@Component({
    selector: 'app-test-queries',
    templateUrl: 'queries.component.html',
    styleUrls: ['queries.styles.sass'],
    encapsulation: ViewEncapsulation.None,
})
export class QueriesComponent {
    constructor(private threadsApiService: ThreadsApiService) {
    }

    ngOnInit() {

    }

    interval: number

    count = 0

    onStart() {
        // this.interval = setTimeout(() => {
            for (let i = 0; i < 4; i++) {
                this.query(this.count)
                this.count++
            }
        // }, 1000)
    }

    onEnd() {
        clearInterval(this.interval)
    }

    query(i: number) {
        this.threadsApiService.testInsert(i).subscribe((res) => {
            console.log('res', res)
        })
    }

}
