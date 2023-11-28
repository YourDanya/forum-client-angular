import {Directive, ElementRef} from '@angular/core'

@Directive({
    selector: '[focusInput]'
})
export class FocusDirective {
    inputField: HTMLInputElement
    input: HTMLDivElement

    constructor(private el: ElementRef<HTMLDivElement>) {}

    ngAfterViewInit() {
        this.input = this.el.nativeElement.querySelector('.input')!
        this.inputField = this.input.querySelector('.input__field')!

        this.inputField.addEventListener('mouseenter', this.onMouseEnter)
    }

    onMouseEnter = () => {
        if (!this.input.classList.contains('input--focused')) {
            this.inputField.focus()
        }
    }

    ngOnDestroy() {
        this.inputField.removeEventListener('mousenter', this.onMouseEnter)
    }
}

// @HostListener('mouseenter') onMouseEnter() {
//     this.onFocus()
// }
//
// @HostListener('click') onClick() {
//     this.onFocus()
// }
