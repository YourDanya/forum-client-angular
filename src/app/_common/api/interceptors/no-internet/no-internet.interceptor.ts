import {Injectable} from '@angular/core'
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {dictionary} from 'src/app/_common/api/interceptors/no-internet/no-internet.content'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'

@Injectable()
export class NoInternetInterceptor implements HttpInterceptor {

    constructor(public translationService: TranslationService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!window.navigator.onLine) {
            const translation = this.translationService.translate(dictionary)
            return throwError(() => new Error(translation.message))
        }

        return next.handle(req)
    }
}
