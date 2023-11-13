import {RouterModule, Routes} from '@angular/router'
import {LoginComponent} from 'src/app/auth/login/login.component'
import {RegisterComponent} from 'src/app/auth/register/register.component'
import {NgModule} from '@angular/core'

export const authRoutes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule{}
