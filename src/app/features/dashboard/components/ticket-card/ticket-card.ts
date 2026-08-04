import { Component, Input, output } from '@angular/core';
import { Ticket } from '@/core/models/ticket';
import { ZardCardComponent } from '@/shared/ui/card';
import { TicketDialogService } from '@/core/services/tiket-dialog.service';
import { STATUS_CONFIG } from '@/shared/utils/status-ticket-constant';

@Component({
  selector: 'app-ticket-card',

  standalone: true,

  imports: [ZardCardComponent],

  templateUrl: './ticket-card.html',

  styleUrl: './ticket-card.scss',
})
export class TicketCard {
  @Input()
  ticket!: Ticket;

  readonly statusConfig = STATUS_CONFIG;

  constructor(private dialog: TicketDialogService) {}

  readonly clicked = output<Ticket>();

  open() {
    this.clicked.emit(this.ticket);
  }
}
