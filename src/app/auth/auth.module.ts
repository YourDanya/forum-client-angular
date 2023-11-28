import {NgModule} from '@angular/core'
import {LoginComponent} from 'src/app/auth/login/login.component'
import {RegisterFormComponent} from 'src/app/auth/register/register-form/register-form.component'
import {AuthRoutingModule} from 'src/app/auth/auth-routing.module'
import {ForgotComponent} from 'src/app/auth/forgot/forgot.component'
import {ResetComponent} from 'src/app/auth/reset/reset.component'
import {LayoutComponent} from 'src/app/auth/_components/_layout/layout.component'
import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {SharedModule} from 'src/app/_common/shared.module'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'
import {RegisterComponent} from 'src/app/auth/register/register.component'
import {ConfirmComponent} from 'src/app/auth/register/confirm/confirm.component'
import {FocusDirective} from 'src/app/auth/_directives/focus/focus.directive'

@NgModule({
    imports: [
        SharedModule, AuthRoutingModule
    ],
    exports: [],
    declarations: [
        LayoutComponent, LoginComponent, RegisterComponent, RegisterFormComponent, ConfirmComponent,
        ForgotComponent, FocusDirective
    ]
})
export class AuthModule{}
