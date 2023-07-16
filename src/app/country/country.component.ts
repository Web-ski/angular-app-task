import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: []
})
export class CountryComponent implements OnInit {

  public country: string = '';

  public countryData: any = null;
  constructor(
    private service:ApiService,
    private route:ActivatedRoute,

    private location:Location
  ) {}

  goBackToPrevPage(): void {
    this.location.back();
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.country = params['name'];
    })

    this.service.getCountryFromApi(this.country)
      .subscribe(response => {
        const data:any = response;
        this.countryData = data[0];
        console.log(this.countryData)
      });
  }
}
