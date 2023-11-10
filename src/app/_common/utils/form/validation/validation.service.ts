import {Injectable} from '@angular/core'
import {Errors} from 'src/app/_common/utils/validation/validation.types'
import {ActivatedRoute} from '@angular/router'
import {Values} from 'src/app/_common/utils/validation/validation.types'
import {ValidsRec} from 'src/app/_common/utils/validation/validation.types'
import {Lang} from 'src/app/_common/types/lang.types'
import {Validator} from 'src/app/_common/utils/validation/validator.class'
import {Inject} from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class ValidationService<T extends object> {
    errorsCount = 0

    constructor(
        private route: ActivatedRoute,
        private validator: Validator,
        @Inject('validations') public validations: ValidsRec,
        @Inject('values') public values: Values<T>,
        @Inject('errors') public errors: Errors<T>,
    ) {}

    validateOne(
        {name}: { name: keyof T & string}
    ) {
        const lang = this.route.snapshot.paramMap.get('lang') as Lang
        const newError = this.validator.validateOne({
            validations: this.validations[name], name, lang, values: this.values
        })
        if (newError && !this.errors[name]) {
            this.errorsCount++
        }
        if (!newError && this.errors[name]) {
            this.errorsCount--
        }
        this.errors[name] = newError
    }

    validateAll() {
        const values = this.values
        let name: keyof typeof values
        for (name in values) {
            const value = values[name]
            for (let name in this.values) {
                this.validateOne({name})
            }
        }
    }
}

