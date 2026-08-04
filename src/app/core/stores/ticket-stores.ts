import { Injectable, inject, signal } from '@angular/core';

import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';

@Injectable({
  providedIn: 'root',
})
export class TicketStore {
  constructor(private readonly ticketService: TicketService) {}

  readonly tickets = signal<Ticket[]>([]);

  readonly loading = signal(false);

  readonly error = signal<string | null>(null);

  readonly selectedTicket = signal<Ticket | null>(null);

  readonly dialogOpen = signal(false);

  select(ticket: Ticket) {
    this.selectedTicket.set(ticket);
    this.dialogOpen.set(true);
  }

  closeDialog() {
    this.dialogOpen.set(false);

    this.selectedTicket.set(null);
  }

  token(token: string) {
    this.loading.set(true);
    this.error.set(null);

    this.ticketService.getTickets(token).subscribe({
      next: (tickets) => {
        this.tickets.set([tickets]);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Gagal memuat tiket');
      },
    });
  }

  load() {
    this.loading.set(true);
    this.error.set(null);

    this.ticketService.getLastTickets().subscribe({
      next: (tickets) => {
        this.tickets.set(tickets);

        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Gagal memuat tiket');
      },
    });
  }
}
