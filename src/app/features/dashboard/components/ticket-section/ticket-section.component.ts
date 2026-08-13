import { Component, input, output } from '@angular/core';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { TicketDialogService } from '@/core/services/tiket-dialog.service';
import { Ticket } from '@/core/models/ticket';
import { TicketStorageService } from '@/core/services/ticket-storage.sevice';
import { ZardButtonComponent } from '@/shared/ui/button';
import { DialogConfirmationService } from '@/shared/components/dialog-confirmation/dialog-confirmation.service';

@Component({
  selector: 'app-ticket-section',
  imports: [TicketCardComponent, ZardButtonComponent],
  templateUrl: './ticket-section.component.html',
  styleUrl: './ticket-section.component.scss',
})
export class TicketSectionComponent {
  constructor(
    readonly dialog: TicketDialogService,
    private readonly ticketStorage: TicketStorageService,
    readonly dialogConfirm: DialogConfirmationService,
  ) {}

  readonly tickets = input<Ticket[]>([]);
  readonly clearRequested = output<void>();

  openTicket(ticket: Ticket) {
    this.dialog.open(ticket);
  }
  async clearTicket() {
    const confirmed = await this.dialogConfirm.confirm(
      'Are you sure you want to clear all recent tickets?',
      'Clear',
      () => {
        this.clearRequested.emit();
      },
    );

    this.clearRequested.emit();
  }
}
