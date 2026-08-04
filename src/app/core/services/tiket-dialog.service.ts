import { ZardDialogService } from '@/shared/ui/dialog';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { TicketDetailDialog } from '@/features/dashboard/components/ticket-detail-dialog/ticket-detail-dialog';

@Injectable({
  providedIn: 'root',
})
export class TicketDialogService {
  constructor(private readonly dialog: ZardDialogService) {}
  open(ticket: Ticket) {
    this.dialog.create({
      zContent: TicketDetailDialog,

      zData: ticket,

      zTitle: undefined,

      zDescription: undefined,

      zHideFooter: true,

      zClosable: false,

      zCustomClasses: 'ticket-dialog-container',
    });
  }
}
