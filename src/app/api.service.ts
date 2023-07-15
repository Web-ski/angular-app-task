import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class ApiService {
  private url = 'https://restcountries.com/v3.1/region/';

  constructor(private http: HttpClient) { }


  getApi(value:string) {
    return this.http.get(this.url + value);
  }
}
