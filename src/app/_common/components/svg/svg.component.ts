import {Component} from '@angular/core'
import {Input} from '@angular/core'

@Component({
    selector: 'app-svg',
    templateUrl: 'svg.component.html',
    styleUrls: ['svg.styles.sass']
})
export class SvgComponent {
    @Input()
    class: string

    _path!: string

    @Input()
    public set path(filePath: string) {
        this._path = filePath
    }
}
