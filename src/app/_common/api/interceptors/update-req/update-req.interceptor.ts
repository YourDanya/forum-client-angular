import {Injectable} from '@angular/core'
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'

@Injectable()
export class UpdateReqInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const updatedReq = req.clone({
            withCredentials: true
        })
        return next.handle(updatedReq)
    }
}
