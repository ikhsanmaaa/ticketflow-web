import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketStorageService {
  private readonly STORAGE_KEY = 'ticketflow:recent-tickets';
  private readonly MAX_TICKETS = 20;

  get(): Ticket[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);

      if (!data) {
        return [];
      }

      return JSON.parse(data) as Ticket[];
    } catch {
      return [];
    }
  }

  save(tickets: Ticket[]): void {
    try {
      const limitedTickets = tickets.slice(0, this.MAX_TICKETS);

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(limitedTickets));
    } catch (error) {
      console.error('Failed to save tickets to localStorage', error);
    }
  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
