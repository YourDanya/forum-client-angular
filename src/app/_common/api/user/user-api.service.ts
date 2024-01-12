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

    logout () {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/logout`, {})
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

    forgotPassword(data: {email: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/forgot-password`, data)
    }

    resetPassword(data: {token: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/reset-password`, data)
    }

    changeEmail(data: {email: string, password: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/change-email`, data)
    }

    sendChangeEmailCode() {
        return this.http.get<{message: string, timer: number}>(`${serverUrlRoot}/user/send-change-email-code`)
    }

    confirmChangeEmail(data: {code: string}) {
        return this.http.post<{message: string, user: User}>(`${serverUrlRoot}/user/confirm-change-email`, data)
    }

    updatePassword(data: {currentPassword: string, newPassword: string, newPasswordConfirm: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/update-password`, data)
    }

    updateUser(data: {name: string, description: string}) {
        return this.http.post<{message: string}>(`${serverUrlRoot}/user/update-user`, data)
    }
}
