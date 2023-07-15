import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./start/start.component";
import { RegionComponent } from "./region/region.component";
import { CountryComponent } from "./country/country.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./404/404.component";

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'regions/:name', component: RegionComponent },
  { path: 'countries/:name', component: CountryComponent },
  { path: 'about', component: AboutComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
