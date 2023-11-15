import {Injectable} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Validations} from 'src/app/_common/utils/form/validation/validation.types'
import {Validator} from 'src/app/_common/utils/form/validation/validator.class'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {InputErrors} from 'src/app/_common/types/form/input-errors.type'
import {InputValues} from 'src/app/_common/types/form/input-values.type'

@Injectable({
    providedIn: 'root'
})
export class ValidationService<T extends InputValues> {
    errorsCount = 0
    values: T
    errors: InputErrors<T>
    validations: Validations

    constructor(
        private route: ActivatedRoute,
        private validator: Validator,
    ) {}

    validateOne(
        {name}: { name: keyof T & string},
    ) {
        const lang = this.route.root.firstChild?.snapshot.paramMap.get('lang') as Lang

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
            for (let name in this.values) {
                this.validateOne({name})
            }
        }
    }
}

