import { ZardButtonComponent } from '@/shared/ui/button';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ZardButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
