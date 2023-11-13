import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {NavComponent} from 'src/app/_components/_layout/nav/nav.component'
import {ButtonComponent} from 'src/app/_common/components/button/button.comonent'
import {InputComponent} from 'src/app/_common/components/input/input.component'
import {SpinnerComponent} from 'src/app/_common/components/spinner/spinner.component'
import {LayoutComponent} from 'src/app/_components/_layout/layout.component'
import {TestComponent} from 'src/app/test/test.component'
import {FirstComponent} from 'src/app/test/first/first.component'
import {SecondComponent} from 'src/app/test/second/second.component'
import {TestService} from 'src/app/test/test.service'
import {SvgComponent} from 'src/app/_common/components/svg/svg.component'
import {SearchSvgComponent} from 'src/app/_common/svg/search/search.component'
import {ModalComponent} from 'src/app/_common/components/modal/modal.component'
import {ModalContentComponent} from 'src/app/_common/components/modal-content/modal-content.component'
import {AuthComponent} from 'src/app/_components/_layout/nav/auth/auth.component'
import {GoogleSvgComponent} from 'src/app/_common/svg/google/google.component'
import {CloseSvgComponent} from 'src/app/_common/svg/close/close.component'
import {AuthModule} from 'src/app/auth/auth.module'

@NgModule({
    declarations: [
        AppComponent, LayoutComponent, NavComponent, AuthComponent, ButtonComponent, SpinnerComponent, TestComponent,
        FirstComponent, SecondComponent, InputComponent, SvgComponent, SearchSvgComponent, GoogleSvgComponent,
        ModalComponent, ModalContentComponent, CloseSvgComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        TestService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
