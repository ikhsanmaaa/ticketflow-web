import { Component } from '@angular/core';
import { injectDialogData, ZardDialogRef } from '@/shared/ui/dialog';
import { Ticket } from '@/features/tickets/models/ticket.model';
import { STATUS_CONFIG } from '@/shared/utils/status-ticket-constant';

@Component({
  selector: 'app-ticket-detail-dialog',
  imports: [],
  templateUrl: './ticket-detail-dialog.component.html',
  styleUrl: './ticket-detail-dialog.component.scss',
})
export class TicketDetailDialogComponent {
  readonly ticket = injectDialogData<Ticket>();

  readonly statusConfig = STATUS_CONFIG;

  constructor(readonly dialog: ZardDialogRef) {}

  close() {
    this.dialog.close();
  }
}
