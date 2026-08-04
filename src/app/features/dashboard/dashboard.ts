import { Component, OnInit, signal } from '@angular/core';

import { Hero } from './components/hero/hero';
import { PrivacyCard } from './components/privacy-card/privacy-card';
import { TicketStore } from '@/core/stores/ticket-stores';
import { TokenService } from '@/core/services/token.service';
import { TicketSection } from './components/ticket-section/ticket-section';
import { Faq } from './components/faq/faq';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',

  imports: [Hero, PrivacyCard, TicketSection, Faq],

  templateUrl: './pages/dashboard.page.html',
  styleUrl: './pages/dashboard.scss',
})
export class Dashboard implements OnInit {
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
