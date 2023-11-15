import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {canMatch} from 'src/app/lang.guard'
import {LayoutComponent} from 'src/app/_components/_layout/layout.component'
import {HomeComponent} from 'src/app/_components/home/home.component'

const routes: Routes = [
    {
        path: ':lang',
        canMatch: [canMatch],
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
        path: '',
        pathMatch: 'full',
        canMatch: [canMatch],
        children: []
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
