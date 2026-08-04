import { Component, Input } from '@angular/core';
import { TicketCard } from '../ticket-card/ticket-card';
import { TicketDialogService } from '@/core/services/tiket-dialog.service';
import { Ticket } from '@/core/models/ticket';

@Component({
  selector: 'app-ticket-section',
  imports: [TicketCard],
  templateUrl: './ticket-section.html',
  styleUrl: './ticket-section.scss',
})
export class TicketSection {
  constructor(readonly dialog: TicketDialogService) {}

  @Input()
  tickets!: Ticket[];

  openTicket(ticket: Ticket) {
    this.dialog.open(ticket);
  }
}
