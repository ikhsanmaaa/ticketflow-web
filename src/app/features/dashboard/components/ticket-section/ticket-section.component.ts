import { Component, Input } from '@angular/core';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { TicketDialogService } from '@/core/services/tiket-dialog.service';
import { Ticket } from '@/core/models/ticket';

@Component({
  selector: 'app-ticket-section',
  imports: [TicketCardComponent],
  templateUrl: './ticket-section.component.html',
  styleUrl: './ticket-section.component.scss',
})
export class TicketSectionComponent {
  constructor(readonly dialog: TicketDialogService) {}

  @Input()
  tickets!: Ticket[];

  openTicket(ticket: Ticket) {
    this.dialog.open(ticket);
  }
}
