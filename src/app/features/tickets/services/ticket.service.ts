import { Injectable } from '@angular/core';

import { ApiService } from '@/core/api/api.service';
import { TICKET_ENDPOINTS } from '../api/ticket-endpoints';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private readonly api: ApiService) {}

  getTicketByToken(token: string) {
    return this.api.get<Ticket>(`${TICKET_ENDPOINTS.byToken}/${token}`);
  }

  getRecentTickets() {
    return this.api.get<Ticket[]>(TICKET_ENDPOINTS.recent);
  }
}
