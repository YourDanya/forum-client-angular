import {Inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {serverUrlRoot} from 'src/app/_common/api/config'
import {User} from 'src/app/_common/types/user/user.type'
import {Dictionary} from 'src/app/_common/types/translation/dictionary.types'

@Injectable({
    providedIn: 'root'
})
export class UserApiService {
    constructor(private http: HttpClient) {}

    login (data: {email: string, password: string}) {
        return this.http.post<{user: User, message: string}>(`${serverUrlRoot}/user/login`, data)
    }

    register(data: {email: string, name: string, password: string, passwordConfirm: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/register`, data)
    }

    sendRegisterCode() {
        return this.http.get<{message: string}>(`${serverUrlRoot}/user/send-register-code`)
    }

    confirmRegisterEmail(data: {code: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/confirm-register-email`, data)
    }
}
