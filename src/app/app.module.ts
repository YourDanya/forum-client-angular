import { NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {NavComponent} from 'src/app/_components/_layout/nav/nav.component'
import {LayoutComponent} from 'src/app/_components/_layout/layout.component'
import {AuthComponent} from 'src/app/_components/_layout/nav/auth/auth.component'
import {SharedModule} from 'src/app/_common/shared.module'

@NgModule({
    declarations: [
        AppComponent, LayoutComponent, NavComponent, AuthComponent,
    ],
    imports: [
        BrowserModule, SharedModule, AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
