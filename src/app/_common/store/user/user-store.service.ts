import {Injectable} from '@angular/core'
import {Observable, Subject} from 'rxjs'
import {User} from 'src/app/_common/types/user/user.type'

@Injectable({
    providedIn: 'root'
})
export class UserStoreService{
    private userSource = new Subject<User | null | undefined>()

    user$ = this.userSource.asObservable()

    setUser(user: User | null) {
        this.userSource.next(user)
    }
}
