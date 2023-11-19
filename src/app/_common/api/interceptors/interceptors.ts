import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {NoInternetInterceptor} from 'src/app/_common/api/interceptors/no-internet/no-internet.interceptor'
import {ErrorInterceptor} from 'src/app/_common/api/interceptors/error/error.interceptor'

export const httpInterceptorsProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: NoInternetInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
]
