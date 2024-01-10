import {RouterModule, Routes} from '@angular/router'
import {LayoutComponent} from 'src/app/profile/_components/_layout/layout.component'
import {SettingsComponent} from 'src/app/profile/settings/settings.component'
import {NgModule} from '@angular/core'

export const profileRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'settings', component: SettingsComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule{}
