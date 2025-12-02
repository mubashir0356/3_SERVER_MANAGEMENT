import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-control',
  imports: [],
  templateUrl: './form-control.html',
  styleUrl: './form-control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
export class FormControlComponent {
  label = input.required<string>()
}
