import {
    concat, empty, map, Observable, scan, Subject, Subscription, switchMap, takeWhile, tap, timer
} from 'rxjs'
import {parseTimer} from 'src/app/_common/utils/helpers/parse-timer/parse-timer.util'

export class Timer {
    timerSubject$ = new Subject<'start' | 'stop' | 'reset' | 'resume'>()
    timer$: Observable<string>
    subscription: Subscription

    time: number
    step = 5000
    timeout = 100000
    timeStamp: number
    resumeTime = 0

    timeStr: string

    start(timeout?: number) {
        if (timeout) {
            this.timeout = timeout
        }

        this.timerSubject$.next('start')
    }

    constructor() {
        this.timer$ = this.timerSubject$.pipe(switchMap(this.work))
    }

    work = (value: string) => {
        if (value === 'stop') {
            return empty()
        }

        return this.count()
    }

    count = () => timer(this.resumeTime, this.step).pipe(
        scan(acc => acc -= this.step, this.timeout + this.step),
        takeWhile(x => x >= 0),
        tap((time) => {
            this.time = time
            this.timeStamp = Date.now()
            this.resumeTime = 0
        }),
        map(parseTimer)
    )

    stop() {
        this.timeout = this.time - this.step
        if (!this.resumeTime) {
            this.resumeTime = this.step
        }
        this.resumeTime = this.resumeTime - (Date.now() - this.timeStamp)

        this.timeStamp = Date.now()
        this.timerSubject$.next('stop')
    }

    reset() {
        this.timerSubject$.next('stop')
    }
}

