import {NgModule} from '@angular/core'
import {SharedModule} from 'src/app/_common/shared.module'
import {TestRoutingModule} from 'src/app/test/test-routing.module'
import {QueriesComponent} from 'src/app/test/queries/queries.component'

@NgModule({
    imports: [
        SharedModule, TestRoutingModule
    ],
    exports: [],
    declarations: [QueriesComponent]
})
export class TestModule{}
