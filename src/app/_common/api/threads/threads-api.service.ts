import {HttpClient} from '@angular/common/http'
import {serverUrlRoot} from 'src/app/_common/api/config'
import {Injectable} from '@angular/core'
import {CreateThreadData} from 'src/app/_common/api/threads/threads-api.types'

@Injectable({
    providedIn: 'root'
})
export class ThreadsApiService {
    constructor(private http: HttpClient) {}
    createThread (data: CreateThreadData) {
        return this.http.post(`${serverUrlRoot}/thread`, data)
    }

    testInsert(i: number) {
        return this.http.get(`${serverUrlRoot}/thread/test?i=${i}`)
    }
}
