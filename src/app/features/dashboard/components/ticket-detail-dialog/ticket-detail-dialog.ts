import { Component } from '@angular/core';
import { injectDialogData, ZardDialogRef } from '@/shared/ui/dialog';
import { Ticket } from '@/core/models/ticket';
import { STATUS_CONFIG } from '@/shared/utils/status-ticket-constant';

@Component({
  selector: 'app-ticket-detail-dialog',
  imports: [],
  templateUrl: './ticket-detail-dialog.html',
  styleUrl: './ticket-detail-dialog.scss',
})
export class TicketDetailDialog {
  readonly ticket = injectDialogData<Ticket>();

  readonly statusConfig = STATUS_CONFIG;

  constructor(readonly dialog: ZardDialogRef) {}

  close() {
    this.dialog.close();
  }
}
