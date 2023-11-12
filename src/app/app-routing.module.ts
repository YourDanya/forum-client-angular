import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from 'src/app/_components/home/home.component'
import {LangGuard} from 'src/app/lang.guard'
import {AppComponent} from 'src/app/app.component'
import {LayoutComponent} from 'src/app/_components/_layout/layout.component'

const routes: Routes = [
    {
        path: ':lang',
        canActivate: [LangGuard],
        component: LayoutComponent,
        children: [
            {path: '', component: HomeComponent},
        ]
    },
    {path: '**', redirectTo: '/en'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
