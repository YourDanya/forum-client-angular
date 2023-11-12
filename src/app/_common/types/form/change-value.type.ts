import {InputValues} from 'src/app/_common/types/form/input-values.type'

export type ChangeValue<T extends InputValues> = {[key in keyof T] : {name: key, value: T[key]}} [keyof T]
