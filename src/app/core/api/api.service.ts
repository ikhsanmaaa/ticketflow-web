import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}
  private readonly baseUrl = environment.apiUrl;

  get<T>(url: string) {
    // console.log('Base URL:', this.baseUrl);
    // console.log('Full URL:', `${this.baseUrl}${url}`);

    return this.http.get<T>(`${this.baseUrl}${url}`);
  }

  post<T>(url: string, body: unknown) {
    return this.http.post<T>(`${this.baseUrl}${url}`, body);
  }

  put<T>(url: string, body: unknown) {
    return this.http.put<T>(`${this.baseUrl}${url}`, body);
  }

  delete<T>(url: string) {
    return this.http.delete<T>(`${this.baseUrl}${url}`);
  }
}
