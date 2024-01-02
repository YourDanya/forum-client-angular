import {Injectable} from '@angular/core'
import {BehaviorSubject, Subject} from 'rxjs'
import {User} from 'src/app/_common/types/user/user.type'

@Injectable({
    providedIn: 'root'
})
export class UserStoreService {
    private userSource = new BehaviorSubject<User | null | undefined>(undefined)

    user$ = this.userSource.asObservable()

    constructor() {}

    setUser(user: User | null) {
        this.userSource.next(user)
    }
}
