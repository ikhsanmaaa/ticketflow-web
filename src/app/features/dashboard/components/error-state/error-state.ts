import { Component } from '@angular/core';
import { ZardCardComponent } from '@/shared/ui/card';

@Component({
  selector: 'app-error-state',
  imports: [ZardCardComponent],
  templateUrl: './error-state.html',
  styleUrl: './error-state.scss',
})
export class ErrorState {}
