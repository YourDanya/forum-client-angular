import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {serverUrlRoot} from 'src/app/_common/api/config'
import {User} from 'src/app/_common/types/user/user.type'

@Injectable({
    providedIn: 'root'
})
export class UserApiService {
    constructor(private http: HttpClient) {}

    getMe() {
        return this.http.get<{user: User | null}>(`${serverUrlRoot}/user/get-me`)
    }

    login (data: {email: string, password: string}) {
        return this.http.post<{user: User, message: string}>(`${serverUrlRoot}/user/login`, data)
    }

    register(data: {email: string, name: string, password: string, passwordConfirm: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/register`, data)
    }

    sendRegisterCode() {
        return this.http.get<{message: string, timer: number}>(`${serverUrlRoot}/user/send-register-code`)
    }

    confirmRegisterEmail(data: {code: string}) {
        return this.http.post<{message: string, user: User}>(`${serverUrlRoot}/user/confirm-register-email`, data)
    }

    forgorPassword(data: {email: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/forgot-password`, data)
    }

    resetPassword(data: {token: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/reset-password`, data)
    }

    changeEmail(data: {email: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/change-email`, data)
    }

    sendChangeEmailCode(data: {email: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/send-change-email-code`, data)
    }

    confirmChangeEmail(data: {email: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/confirm-change-email`, data)
    }
}
