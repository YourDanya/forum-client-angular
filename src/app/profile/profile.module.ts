import {NgModule} from '@angular/core'
import {SharedModule} from 'src/app/_common/shared.module'
import {SettingsComponent} from 'src/app/profile/settings/settings.component'
import {UpdateEmailComponent} from 'src/app/profile/settings/update-email/update-email.component'
import {UpdatePasswordComponent} from 'src/app/profile/settings/update-password/update-password.component'
import {LayoutComponent} from 'src/app/profile/_components/_layout/layout.component'
import {ProfileRoutingModule} from 'src/app/profile/profile-routing.module'
import {ChangeEmailComponent} from 'src/app/profile/settings/update-email/change-email/change-email.component'
import {ConfirmEmailComponent} from 'src/app/profile/settings/update-email/confirm-email/confirm-email.component'

@NgModule({
    imports: [SharedModule, ProfileRoutingModule],
    declarations: [
        LayoutComponent, SettingsComponent, UpdateEmailComponent, UpdatePasswordComponent,
        ChangeEmailComponent, ConfirmEmailComponent
    ]
})
export class ProfileModule {}
