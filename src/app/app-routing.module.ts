import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./views/start/start.component";
import { RegionComponent } from "./views/region/region.component";
import { CountryComponent } from "./views/country/country.component";
import { PageNotFoundComponent } from "./views/404/404.component";

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'regions/:name', component: RegionComponent },
  { path: 'regions/:name/:name', component: CountryComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
