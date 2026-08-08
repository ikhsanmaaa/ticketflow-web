import { Component } from '@angular/core';
import { ZardCardComponent } from '@/shared/ui/card';

@Component({
  selector: 'app-empty-state',
  imports: [ZardCardComponent],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
})
export class EmptyStateComponent {}
