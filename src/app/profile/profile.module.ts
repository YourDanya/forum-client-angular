import {NgModule} from '@angular/core'
import {SharedModule} from 'src/app/_common/shared.module'
import {SettingsComponent} from 'src/app/profile/settings/settings.component'
import {UpdateEmailComponent} from 'src/app/profile/settings/update-email/update-email.component'
import {UpdatePasswordComponent} from 'src/app/profile/settings/update-password/update-password.component'

@NgModule({
    imports: [SharedModule],
    declarations: [SettingsComponent, UpdateEmailComponent, UpdatePasswordComponent]
})
export class ProfileModule{}
