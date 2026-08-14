import { ZardDialogService } from '@/shared/ui/dialog';
import { Injectable } from '@angular/core';
import { Ticket } from '@/features/tickets/models/ticket.model';
import { TicketDetailDialogComponent } from '@/features/dashboard/components/ticket-detail-dialog/ticket-detail-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class TicketDialogService {
  constructor(private readonly dialog: ZardDialogService) {}
  open(ticket: Ticket) {
    this.dialog.create({
      zContent: TicketDetailDialogComponent,

      zData: ticket,

      zTitle: undefined,

      zDescription: undefined,

      zHideFooter: true,

      zClosable: false,

      zCustomClasses: 'ticket-dialog-container',
    });
  }
}
