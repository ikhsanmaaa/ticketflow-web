import { Injectable, inject } from '@angular/core';
import { ZardDialogService } from '@/shared/ui/dialog';
import { DialogConfirmationComponent } from './dialog-confirmation.component';

@Injectable({
  providedIn: 'root',
})
export class DialogConfirmationService {
  private readonly dialog = inject(ZardDialogService);

  confirm(message: string, yesText: string, onConfirm: () => void) {
    this.dialog.create({
      zContent: DialogConfirmationComponent,

      zData: {
        message,
        yesText,
        onConfirm,
      },

      zTitle: undefined,
      zDescription: undefined,

      zHideFooter: true,
      zClosable: false,
      zMaskClosable: false,

      zCustomClasses: 'confirm-dialog-container',
    });
  }
}
