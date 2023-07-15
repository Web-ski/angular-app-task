import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class ApiService {
  private url = 'https://restcountries.com/#api-endpoints-v3-region';
  constructor(private http: HttpClient) { }


  getApi() {
    return this.http.get(this.url);
  }
}
