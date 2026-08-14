import { Component, OnInit } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { PrivacyCardComponent } from './components/privacy-card/privacy-card.component';
import { TicketSectionComponent } from './components/ticket-section/ticket-section.component';
import { FaqComponent } from './components/faq/faq.component';
import { ActivatedRoute } from '@angular/router';
import { TicketStoreService } from '@/features/tickets/state/ticket.store';

@Component({
  standalone: true,
  selector: 'app-dashboard',

  imports: [HeroComponent, PrivacyCardComponent, TicketSectionComponent, FaqComponent],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(
    readonly store: TicketStoreService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');

    if (token) {
      this.store.loadByToken(token);
    } else {
      this.store.loadCachedTickets();
    }
  }
}
