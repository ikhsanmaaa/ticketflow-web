import { Injectable, signal } from '@angular/core';

import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';
<<<<<<< HEAD
import { TicketStorageService } from '../services/ticket-storage.service';
=======
import { TicketStorageService } from '../services/ticket-storage.sevice';
>>>>>>> main

@Injectable({
  providedIn: 'root',
})
export class TicketStoreService {
  constructor(
    private readonly ticketService: TicketService,
    private readonly ticketStorage: TicketStorageService,
  ) {}

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

  loadByToken(token: string) {
    this.loading.set(true);
    this.error.set(null);

    this.ticketService.getTickets(token).subscribe({
      next: (ticket) => {
        const cachedTickets = this.ticketStorage.get();

        const updatedTickets = this.mergeTickets(ticket, cachedTickets);

        this.tickets.set(updatedTickets);

        this.ticketStorage.save(updatedTickets);

        this.loading.set(false);
      },

      error: () => {
        this.loading.set(false);
        this.error.set('Gagal memuat tiket');
      },
    });
  }

  load() {
    const cachedTickets = this.ticketStorage.get();

    this.tickets.set(cachedTickets);
  }

  private mergeTickets(ticket: Ticket, cachedTickets: Ticket[]): Ticket[] {
    const filtered = cachedTickets.filter((item) => item.key !== ticket.key);

    return [ticket, ...filtered];
  }

  clearHistory() {
    this.ticketStorage.clear();
    this.tickets.set([]);
  }
}
