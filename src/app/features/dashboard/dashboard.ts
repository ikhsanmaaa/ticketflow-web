import { Component, OnInit, signal } from '@angular/core';

import { Hero } from './components/hero/hero';
import { TicketCard } from './components/ticket-card/ticket-card';
import { PrivacyCard } from './components/privacy-card/privacy-card';
import { TicketStore } from '@/core/stores/ticket-stores';
import { TokenService } from '@/core/services/token.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',

  imports: [Hero, TicketCard, PrivacyCard],

  templateUrl: './pages/dashboard.html',
  styleUrl: './pages/dashboard.css',
})
export class Dashboard implements OnInit {
  constructor(
    readonly store: TicketStore,
    private readonly tokenService: TokenService,
  ) {}

  ngOnInit(): void {
    const token = this.tokenService.getToken();
    this.store.load(token);
  }
}
