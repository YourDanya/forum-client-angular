import {Component} from '@angular/core'
import {ViewEncapsulation} from '@angular/core'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'
import {Translation} from 'src/app/_common/types/translation/translation.types'
import {dictionary, initErrors, initValues, validations} from 'src/app/auth/login/login.content'
import {InputErrors} from 'src/app/_common/types/form/input-errors.type'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {InputEvent} from 'src/app/_common/types/form/input-event.type'
import inputChange from 'src/app/_common/utils/form/input-change/input-change'
import {UserApiService} from 'src/app/_common/api/user/user-api.service'
import {User} from 'src/app/_common/types/user/user.type'
import {Router} from '@angular/router'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {UserStoreService} from 'src/app/_common/store/user/user-store.service'

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [ValidationService]
})
export class LoginComponent {
    translation: Translation<typeof dictionary>

    values = {...initValues}
    errors: InputErrors<typeof initErrors> = {...initErrors}
    loading = false
    error = ''
    success = ''
    lang: Lang
    constructor(
        public translationService: TranslationService,
        public validationService: ValidationService<typeof initValues>,
        public userApiService: UserApiService,
        public router: Router,
        public userStoreService: UserStoreService
    ) {
        this.translation = this.translationService.translate(dictionary)
        this.lang = this.router.url.split('/')[1] as Lang

        this.validationService.values = this.values
        this.validationService.errors = this.errors
        this.validationService.validations = validations
    }

    onChange(event: InputEvent) {
        const {name, value} = inputChange<typeof initValues>(event)
        this.values[name] = value
        this.validationService.validateOne({name})
    }

    onSubmit(event: Event) {
        event.preventDefault()
        this.validationService.validateAll()

        if (this.validationService.errorsCount === 0) {
            this.login()
        }
    }

    login() {
        this.loading = true
        this.userApiService.login(this.values).subscribe({
            next: this.loginSuccess,
            error: this.loginError
        })
    }
    loginSuccess = (data: {user: User, message: string}) => {
        this.loading = false
        this.success = data.message
        this.error = ''
        this.userStoreService.setUser(data.user)
        this.router.navigate([`/${this.lang}`])
    }

    loginError = (error: Error) => {
        this.loading = false
        this.error = error.message
        this.success = ''
    }
}
