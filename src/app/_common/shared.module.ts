import {NgModule} from '@angular/core'
import {ButtonComponent} from 'src/app/_common/components/button/button.comonent'
import {SpinnerComponent} from 'src/app/_common/components/spinner/spinner.component'
import {InputComponent} from 'src/app/_common/components/input/input.component'
import {ModalComponent} from 'src/app/_common/components/modal/modal.component'
import {ModalContentComponent} from 'src/app/_common/components/modal-content/modal-content.component'
import {SearchSvgComponent} from 'src/app/_common/svg/search/search.component'
import {GoogleSvgComponent} from 'src/app/_common/svg/google/google.component'
import {CloseSvgComponent} from 'src/app/_common/svg/close/close.component'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {httpInterceptorsProviders} from 'src/app/_common/api/interceptors/interceptors'

@NgModule({
    imports: [
        CommonModule, RouterModule, HttpClientModule
    ],
    declarations: [
        ButtonComponent, SpinnerComponent, InputComponent, ModalComponent, ModalContentComponent,
        SearchSvgComponent, GoogleSvgComponent, CloseSvgComponent
    ],
    exports: [
        CommonModule, ButtonComponent, SpinnerComponent, InputComponent, ModalComponent, ModalContentComponent,
        SearchSvgComponent, GoogleSvgComponent, CloseSvgComponent
    ],
    providers: [
        httpInterceptorsProviders
    ]
})
export class SharedModule {}
