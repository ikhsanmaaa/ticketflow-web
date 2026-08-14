import { Injectable, signal } from '@angular/core';

import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';
import { TicketStorageService } from '../services/ticket-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TicketStoreService {
  readonly tickets = signal<Ticket[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  constructor(
    private readonly ticketService: TicketService,
    private readonly ticketStorage: TicketStorageService,
  ) {}

  loadByToken(token: string): void {
    this.loading.set(true);
    this.error.set(null);

    this.ticketService.getTicketByToken(token).subscribe({
      next: (ticket) => {
        const cachedTickets = this.ticketStorage.getTickets();
        const updatedTickets = this.mergeTicketWithHistory(ticket, cachedTickets);

        this.tickets.set(updatedTickets);
        this.ticketStorage.saveTickets(updatedTickets);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Gagal memuat tiket');
      },
    });
  }

  loadCachedTickets(): void {
    this.tickets.set(this.ticketStorage.getTickets());
  }

  clearHistory(): void {
    this.ticketStorage.clearTickets();
    this.tickets.set([]);
  }

  private mergeTicketWithHistory(ticket: Ticket, cachedTickets: Ticket[]): Ticket[] {
    const historyWithoutCurrentTicket = cachedTickets.filter((item) => item.key !== ticket.key);
    return [ticket, ...historyWithoutCurrentTicket];
  }
}
