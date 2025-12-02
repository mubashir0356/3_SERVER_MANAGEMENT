import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../shared-ui/button/button";
import { FormControlComponent } from "../../../shared-ui/form-control/form-control";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, FormControlComponent, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {

  form = viewChild.required<ElementRef<HTMLFormElement>>('formEl');

  submitTicket(titleEl: HTMLInputElement, requestEl: HTMLTextAreaElement, formEl: HTMLFormElement) {
    // console.dir(titleEl)
    const title = titleEl.value;
    const request = requestEl.value;
    // formEl.reset(); // Reset the form after submission
    this.form().nativeElement.reset();
  }
}
