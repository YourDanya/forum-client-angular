import {Injectable} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Lang} from 'src/app/_common/types/translation/lang.type'

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    constructor(private route: ActivatedRoute) {}

    translate<T extends Record<Lang, object>>(dictionary: T): T[Lang] {
        const lang = <Lang> this.route.snapshot.paramMap.get('lang')
        return dictionary[lang]
    }
}
