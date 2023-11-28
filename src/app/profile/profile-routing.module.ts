import {Routes} from '@angular/router'
import {LayoutComponent} from 'src/app/profile/_components/_layout/layout.component'
import {SettingsComponent} from 'src/app/profile/settings/settings.component'

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
