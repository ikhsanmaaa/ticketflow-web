import { Component, inject } from '@angular/core';
import { ZardButtonComponent } from '@/shared/ui/button';
import { injectDialogData, ZardDialogRef } from '@/shared/ui/dialog';

export interface DialogConfirmationData {
  message: string;
  yesText?: string;
  onConfirm: () => void;
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [ZardButtonComponent],
  templateUrl: './dialog-confirmation.component.html',
  styleUrl: './dialog-confirmation.component.scss',
})
export class DialogConfirmationComponent {
  readonly data = injectDialogData<DialogConfirmationData>();

  private readonly dialogRef = inject(ZardDialogRef);

  confirm() {
    this.data.onConfirm();
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
