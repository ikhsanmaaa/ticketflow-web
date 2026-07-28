import { Component, Input } from '@angular/core';

import { Ticket } from '@/core/models/ticket';
import { StatusBadge } from '../status-badge/status-badge';

@Component({
  selector: 'app-ticket-card',

  standalone: true,

  imports: [StatusBadge],

  templateUrl: './ticket-card.html',

  styleUrl: './ticket-card.scss',
})
export class TicketCard {
  @Input()
  ticket!: Ticket;
}
