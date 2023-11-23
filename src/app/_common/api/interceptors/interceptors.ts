import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {NoInternetInterceptor} from 'src/app/_common/api/interceptors/no-internet/no-internet.interceptor'
import {ErrorInterceptor} from 'src/app/_common/api/interceptors/error/error.interceptor'
import {UpdateReqInterceptor} from 'src/app/_common/api/interceptors/update-req/update-req.interceptor'

export const httpInterceptorsProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: NoInternetInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: UpdateReqInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
]
