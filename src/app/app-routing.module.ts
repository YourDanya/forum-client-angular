import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LangGuard} from 'src/app/lang.guard'
import {LayoutComponent} from 'src/app/_components/_layout/layout.component'
import {HomeComponent} from 'src/app/_components/home/home.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        canActivate: [LangGuard],
        children: []
    },
    {
        path: ':lang',
        canActivate: [LangGuard],
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'auth',
                loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
