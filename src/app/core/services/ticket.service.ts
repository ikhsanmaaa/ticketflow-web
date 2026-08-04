import { Injectable } from '@angular/core';

import { ApiService } from '../api/api.service';

import { Ticket } from '../models/ticket';
import { API } from '../api/endpoint';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(readonly api: ApiService) {}

  getTickets(token: string) {
    return this.api.get<Ticket>(`${API.ticket.list}/${token}`);
  }
  getLastTickets() {
    return this.api.get<Ticket[]>(`${API.lastTicket.list}`);
  }
}
