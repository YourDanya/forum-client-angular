import {Component} from '@angular/core'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'forum-client-angular'

    constructor(
        public userApiService: UserApiService,
        public userStoreService: UserStoreService
    ) {}

    ngOnInit() {
        this.userApiService.getMe().subscribe((data) => {
            const {user} = data
            this.userStoreService.setUser(user)
        })
    }
}
