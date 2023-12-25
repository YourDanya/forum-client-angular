import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'
import {QueriesComponent} from 'src/app/test/queries/queries.component'

export const testRoutes: Routes = [
    {
        path: 'queries',
        component: QueriesComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(testRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TestRoutingModule {}
