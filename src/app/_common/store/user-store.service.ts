import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {User} from 'src/app/_common/types/user/user.type'

@Injectable({
    providedIn: 'root'
})
export class UserStoreService{
    user$: Observable<User>
}
