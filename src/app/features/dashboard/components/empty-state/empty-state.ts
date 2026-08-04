import { Component } from '@angular/core';
import { ZardCardComponent } from '@/shared/ui/card';

@Component({
  selector: 'app-empty-state',
  imports: [ZardCardComponent],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.scss',
})
export class EmptyState {}
