import { Component } from '@angular/core';
import {Input} from '@angular/core'

@Component({
    selector: 'app-search-svg',
    templateUrl: 'search.component.html',
    styleUrls: ['search.styles.sass']
})
export class SearchSvgComponent {
    @Input()
    class: string
}