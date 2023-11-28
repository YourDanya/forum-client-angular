import {RouterModule, Routes} from '@angular/router'
import {LoginComponent} from 'src/app/auth/login/login.component'
import {NgModule} from '@angular/core'
import {ResetComponent} from 'src/app/auth/reset/reset.component'
import {ForgotComponent} from 'src/app/auth/forgot/forgot.component'
import {LayoutComponent} from 'src/app/auth/_components/_layout/layout.component'
import {RegisterComponent} from 'src/app/auth/register/register.component'

export const authRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'register', component: RegisterComponent
            },
            {
                path: 'login', component: LoginComponent
            },
            {
                path: 'reset', component: ResetComponent
            },
            {
                path: 'forgot', component: ForgotComponent
            }
        ]
    }
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
