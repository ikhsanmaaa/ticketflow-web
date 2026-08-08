import { Component } from '@angular/core';
import { ZardCardComponent } from '@/shared/ui/card';
import { ZardSkeletonComponent } from '@/shared/ui/skeleton';

@Component({
  selector: 'app-ticket-skeleton',
  imports: [ZardCardComponent, ZardSkeletonComponent],
  templateUrl: './ticket-skeleton.component.html',
  styleUrl: './ticket-skeleton.component.scss',
})
export class TicketSkeletonComponent {}
