import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class ApiService {
  private regionUrl = 'https://restcountries.com/v3.1/region/';
  private countryUrl = 'https://restcountries.com/v3.1/alpha/';

  constructor(private http: HttpClient) { }

  getRegionCountriesFromApi(value:string) {
    return this.http.get(this.regionUrl + value);
  }

  getCountryFromApi(value:string) {
    return this.http.get(this.countryUrl + value);
  }
}
