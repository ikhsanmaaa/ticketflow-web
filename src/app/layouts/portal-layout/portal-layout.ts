import { Footer } from '@/shared/components/footer/footer';
import { Header } from '@/shared/components/header/header';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portal-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './portal-layout.html',
  styleUrl: './portal-layout.css',
})
export class PortalLayout {}
