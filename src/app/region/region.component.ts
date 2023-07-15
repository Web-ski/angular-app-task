import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  public region: string = '';
  public countriesList: []|null = null;
  constructor(
    private service:ApiService,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.region = params['name'];
    })

    this.service.getApi(this.region)
      .subscribe(response => {
        this.countriesList = response as [];
        console.log(this.countriesList)
      });
  }
}
