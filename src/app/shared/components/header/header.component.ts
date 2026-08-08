import { ZardButtonComponent } from '@/shared/ui/button';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ZardButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  login() {
    console.log('login');
  }
}
