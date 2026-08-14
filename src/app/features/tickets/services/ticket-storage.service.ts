import { Injectable } from '@angular/core';

import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketStorageService {
  private readonly storageKey = 'ticketflow:recent-tickets';
  private readonly maxTickets = 20;

  getTickets(): Ticket[] {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? (JSON.parse(data) as Ticket[]) : [];
    } catch {
      return [];
    }
  }

  saveTickets(tickets: Ticket[]): void {
    try {
      const limitedTickets = tickets.slice(0, this.maxTickets);
      localStorage.setItem(this.storageKey, JSON.stringify(limitedTickets));
    } catch (error) {
      console.error('Failed to save tickets to localStorage', error);
    }
  }

  clearTickets(): void {
    localStorage.removeItem(this.storageKey);
  }
}
