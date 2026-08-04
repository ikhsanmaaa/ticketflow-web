import { ZardButtonComponent } from '@/shared/ui/button';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ZardButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  login() {
    console.log('login');
  }
}
