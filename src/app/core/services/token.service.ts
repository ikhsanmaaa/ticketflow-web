import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private readonly route: ActivatedRoute) {}

  getToken(): string {
    return this.route.snapshot.queryParamMap.get('token') ?? '';
  }
}
