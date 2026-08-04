import { Component } from '@angular/core';
import { ZardCardComponent } from '@/shared/ui/card';
import { ZardSkeletonComponent } from '@/shared/ui/skeleton';

@Component({
  selector: 'app-ticket-skeleton',
  imports: [ZardCardComponent, ZardSkeletonComponent],
  templateUrl: './ticket-skeleton.html',
  styleUrl: './ticket-skeleton.scss',
})
export class TicketSkeleton {}
