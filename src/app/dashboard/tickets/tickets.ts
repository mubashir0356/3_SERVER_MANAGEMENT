import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import type { Ticket } from './tickets.model';
import { Ticket as TicketComponent } from './ticket/ticket';

@Component({
    selector: 'app-tickets',
    imports: [NewTicket, TicketComponent],
    templateUrl: './tickets.html',
    styleUrl: './tickets.css',
})
export class Tickets {
    tickets: Ticket[] = [];

    onAddTicket(ticketData: { title: string; request: string }) {
        const newTicket: Ticket = {
            id: Math.random().toString(),
            title: ticketData.title,
            request: ticketData.request,
            status: 'open',
        };
        this.tickets.push(newTicket);
    }

    onCloseTicket(ticketId: string) {
        this.tickets = this.tickets.map((ticket) => {
            if (ticket.id === ticketId) {
                return { ...ticket, status: 'closed' };
            }
            return ticket;
        });
    }
}
