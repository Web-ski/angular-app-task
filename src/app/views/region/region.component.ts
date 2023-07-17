import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  public region: string = '';
  public countriesList: any[]|null = null;
  constructor(
    private service:ApiService,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.region = params['name'];
    })

    this.service.getRegionCountriesFromApi(this.region)
      .subscribe(response => {
        const data: any = response as [];
        this.countriesList = data.sort(function (a:any, b:any) {
          if (a.name.common < b.name.common) {
            return -1;
          }
          if (a.name.common > b.name.common) {
            return 1;
          }
          return 0;
        })
        console.log(this.countriesList)
      });
  }
}
