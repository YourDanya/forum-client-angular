import {Injectable} from '@angular/core'
import {Lang} from 'src/app/_common/types/translation/lang.type'
import {ValidationValue} from 'src/app/_common/utils/form/validation/validation.types'
import {InputValues} from 'src/app/_common/types/form/input-values.type'

@Injectable({
    providedIn: 'root'
})
export class Validator {
    validateOne(params: {
        validations: ValidationValue, value: string | number, lang: Lang
    }) {
        let {validations, value, lang} = params

        let error = ''

        loop: for (let valName in validations) {
            let valValue = validations[valName]
            switch (valName) {
                case ('required'): {
                    if (value === '' || value === null || value === undefined) {
                        error = {
                            en: 'This Field is required.',
                            ru: 'Поле обязательно для заполнения.'
                        }[lang]
                        break loop
                    }
                    break
                }
                case ('minLength') : {
                    let stringValue = value as string
                    const minLength = valValue as number
                    const end = this.symbol(minLength, lang)
                    if (stringValue.length < minLength) {
                        error = {
                            en: `The field length must not be less than ${minLength} symbol${end}.`,
                            ru: `Длина поля должна быть не менее чем ${minLength} символ${end}.`
                        }[lang]
                        break loop
                    }
                    break
                }
                case ('maxLength') : {
                    let stringValue = value as string
                    const maxLength = valValue as number
                    const end = this.symbol(maxLength, lang)
                    if (stringValue.length > maxLength) {
                        error = {
                            en: `The field length must be less than ${maxLength} symbol${end}.`,
                            ru: `Длина поля должна быть меньше чем ${maxLength} символ${end}.`
                        }[lang]
                        break loop
                    }
                    break
                }
                case ('isEmail') : {
                    let stringValue = value as string
                    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringValue)) {
                        error = {
                            en: 'Enter a valid email.',
                            ru: 'Введите правильную почту.'
                        }[lang]
                        break loop
                    }
                    break
                }
                case ('isNumber') : {
                    let stringValue = value as string
                    if (!/^\d+(\.\d{1,2})?$/.test(stringValue)) {
                        error = {
                            en: 'Enter a number.',
                            ru: 'Введите число.'
                        }[lang]
                        break loop
                    }
                    break
                }
                case ('isNumberGreaterThanZero') : {
                    let stringValue = value as string
                    if (!/(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)/.test(stringValue)) {
                        error = {
                            en: 'Enter a number greater than zero.',
                            ru: 'Введите число должно быть большее нуля.'
                        }[lang]
                        break loop
                    }
                    break
                }
                case ('isPhone') : {
                    let stringValue = value as string
                    if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(stringValue)) {
                        error = {
                            en: 'Enter a valid number.',
                            ru: 'Введите правильный номер.'
                        }[lang]
                        break loop
                    }
                    break
                }
            }
        }
        return error
    }

    symbol(number: number, lang: Lang) {
        const lastChar = number % 10
        const lastTen = number % 100
        if (lang === 'en') {
            if (lastChar === 1) {
                return ''
            } else {
                return 's'
            }
        }
        if (lastTen > 10 && lastTen < 20) {
            return 'ов'
        }
        if (lastChar === 1) {
            return ''
        }
        if (lastChar === 2 || lastChar === 3 || lastChar === 4) {
            return 'а'
        }
        return 'ов'
    }
}
