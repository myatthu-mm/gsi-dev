import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: 'input[appLetterOnly]'
})
export class LetterOnlyDirective {

    @Output() valueChange = new EventEmitter();
    constructor(private elm: ElementRef) { }

    @HostListener('input', ['$event']) onInputChange(event: Event): void {
        const initalValue = this.elm.nativeElement.value;
        const newValue = initalValue.replace(/[^A-Za-z\s]*/g, '');
        this.elm.nativeElement.value = newValue;
        this.valueChange.emit(newValue);
        if (initalValue !== this.elm.nativeElement.value) {
            event.stopPropagation();
        }
    }

}
