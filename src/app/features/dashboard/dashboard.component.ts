import { Component, OnInit, signal } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { PrivacyCardComponent } from './components/privacy-card/privacy-card.component';
import { TicketStore } from '@/core/stores/ticket-stores';
import { TokenService } from '@/core/services/token.service';
import { TicketSectionComponent } from './components/ticket-section/ticket-section.component';
import { FaqComponent } from './components/faq/faq.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',

  imports: [HeroComponent, PrivacyCardComponent, TicketSectionComponent, FaqComponent],

  templateUrl: './pages/dashboard.page.html',
  styleUrl: './pages/dashboard.scss',
})
export class DashboardComponent implements OnInit {
  constructor(
    readonly store: TicketStore,
    private readonly tokenService: TokenService,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');

    if (token) {
      this.store.token(token);
    } else {
      this.store.load();
    }
  }
}
