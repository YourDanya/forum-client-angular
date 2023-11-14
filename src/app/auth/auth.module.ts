import {NgModule} from '@angular/core'
import {LoginComponent} from 'src/app/auth/login/login.component'
import {RegisterComponent} from 'src/app/auth/register/register.component'
import {AuthRoutingModule} from 'src/app/auth/auth-routing.module'
import {ForgotComponent} from 'src/app/auth/forgot/forgot.component'
import {ResetComponent} from 'src/app/auth/reset/reset.component'
import {LayoutComponent} from 'src/app/auth/_components/_layout/layout.component'
import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {SharedModule} from 'src/app/_common/shared.module'
import {TranslationService} from 'src/app/_common/utils/helpers/translation/tanslation.service'

@NgModule({
    imports: [
        SharedModule,
        AuthRoutingModule
    ],
    declarations: [
        LayoutComponent, LoginComponent, RegisterComponent, ForgotComponent, ResetComponent
    ]
})
export class AuthModule{}
