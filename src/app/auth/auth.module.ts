import {NgModule} from '@angular/core'
import {LoginComponent} from 'src/app/auth/login/login.component'
import {RegisterComponent} from 'src/app/auth/register/register.component'
import {AuthRoutingModule} from 'src/app/auth/auth-routing.module'

@NgModule({
    imports: [
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent, RegisterComponent
    ]
})
export class AuthModule{}
