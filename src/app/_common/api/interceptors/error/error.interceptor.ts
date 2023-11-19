import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {catchError, Observable, throwError} from 'rxjs'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary} from 'src/app/_common/api/interceptors/error/error.content'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(public translationSerice: TranslationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(this.handleError.bind(this))
        )
    }

    handleError (error: HttpErrorResponse) {
        if (!error.error) {
            return throwError(error)
        }
        const translation = this.translationSerice.translate(dictionary)
        return throwError(() => new Error(translation.message))
    }
}
