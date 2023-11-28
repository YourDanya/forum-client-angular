import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {catchError, map, Observable, throwError} from 'rxjs'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {dictionary} from 'src/app/_common/api/interceptors/error/error.content'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(public translationSerice: TranslationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(this.handleError),
            map(this.handleSuccess)
        )
    }

    handleError = (error: HttpErrorResponse) => {
        if (!error.error) {
            return throwError(error)
        }
        if (error.status.toString()[0] === '4') {
            error.error.message = this.translationSerice.translate(error.error.message)
            return throwError(error.error)
        }
        const translation = this.translationSerice.translate(dictionary)
        return throwError(() => new Error(translation.message))
    }

    handleSuccess = (event: HttpEvent<any>) => {
        if (!(event instanceof HttpResponse)) {
            return event
        }
        event.body.message = this.translationSerice.translate(event.body.message)
        return event
    }
}
