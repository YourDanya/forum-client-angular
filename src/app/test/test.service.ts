import {Injectable} from '@angular/core'
import {initValues} from 'src/app/test/first/first.content'

export class TestService {
    constructor() {}

    public firstValues: Record<string, string | number>
    public secondValues: Record<string, string | number>
}
