import {Component, ViewEncapsulation} from '@angular/core'
import {ValidationService} from 'src/app/_common/utils/form/validation/validation.service'

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register-form.styles.sass'],
    encapsulation: ViewEncapsulation.None,
    providers: [ValidationService],
})
export class RegisterComponent {
    shouldConfirm = false
}
