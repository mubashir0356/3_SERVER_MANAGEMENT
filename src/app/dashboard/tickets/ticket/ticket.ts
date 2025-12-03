import { Component, input, output, signal } from '@angular/core';
import type { Ticket as TicketType} from "../tickets.model";

@Component({
    selector: 'app-ticket',
    imports: [],
    templateUrl: './ticket.html',
    styleUrl: './ticket.css',
})
export class Ticket {
    ticketData = input.required<TicketType>();
    isVisible = signal<boolean>(false);
    closeTicket = output()
    
    onToggleVisibility() {
        // this.isVisible.set(!this.isVisible());
        this.isVisible.update(wasVisible => !wasVisible);
    }

    onMarkAsCompleted() {
        this.closeTicket.emit();
    }
}
