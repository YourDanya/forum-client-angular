import {Component, ViewEncapsulation} from '@angular/core'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary} from 'src/app/profile/settings/settings.content'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'
import {User} from 'src/app/_common/types/user/user.type'

@Component({
    selector: 'app-profile-settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.styles.sass'],
    encapsulation: ViewEncapsulation.None
})
export class SettingsComponent {
    translation: Translation<typeof dictionary>
    user: User
    modal = {email: true, password: false, delete: false}
    modalActive = true

    constructor(
        public translationService: TranslationService,
        public userStoreService: UserStoreService
    ) {
        this.translation = this.translationService.translate(dictionary)
    }

    ngOnInit() {
        this.userStoreService.user$.subscribe((user) => {
            this.user = user as User
        })
    }

    onShowModal = (name: keyof typeof this.modal) => {
        this.modal[name] = true
        this.modalActive = true
    }

    onHideModal = (name?: keyof typeof this.modal) => {
        if (name) {
            this.modal[name] = false
        }
        let newName: keyof typeof this.modal
        for (newName in this.modal) {
            if (this.modal[newName]) {
                this.modal[newName] = false
            }
        }
        this.modalActive = false
    }
}
