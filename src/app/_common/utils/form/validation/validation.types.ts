export type Valids = Record<string, string | number | boolean>
export type ValidsRec = Record<string, Valids>

export type Values<T> = {[key in keyof T]: T[key]}
// export type Values<T> = Record<keyof T, string | number | boolean>
export type Errors<T> = Record<keyof T, string>

export type One = {one: string, two: number}

