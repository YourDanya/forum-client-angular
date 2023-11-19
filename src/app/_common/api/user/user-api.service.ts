import {Inject, Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {serverUrlRoot} from 'src/app/_common/api/config'
import {User} from 'src/app/_common/types/user/user.type'

@Injectable({
    providedIn: 'root'
})
export class UserApiService {
    constructor(private http: HttpClient) {}
    login (data: {email: string, password: string}) {
        return this.http.post<{user: User}>(`${serverUrlRoot}/user/login`, data)
    }
    register(data: {email: string, name: string, password: string, passwordConfirm: string}) {
        return this.http.post(`${serverUrlRoot}/user/register`, data)
    }
}
