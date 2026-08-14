import { Component, Input, output } from '@angular/core';

import { Ticket } from '@/features/tickets/models/ticket.model';
import { ZardCardComponent } from '@/shared/ui/card';
import { STATUS_CONFIG } from '@/shared/utils/status-ticket-constant';

@Component({
  selector: 'app-ticket-card',
  standalone: true,
  imports: [ZardCardComponent],
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.scss',
})
export class TicketCardComponent {
  @Input()
  ticket!: Ticket;

  readonly statusConfig = STATUS_CONFIG;

  readonly ticketSelected = output<Ticket>();

  selectTicket(): void {
    this.ticketSelected.emit(this.ticket);
  }
}
