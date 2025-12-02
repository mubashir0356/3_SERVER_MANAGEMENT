import { Component, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-form-control',
    imports: [],
    templateUrl: './form-control.html',
    styleUrl: './form-control.css',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'control',
        '(click)': 'onClick()',
    },
})
export class FormControlComponent {
    @ContentChild('input') inputElement?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

    label = input.required<string>();

    onClick() {
        console.log(this.inputElement);
    }
}
