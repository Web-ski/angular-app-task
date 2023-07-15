import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from "./start/start.component";
import { AboutComponent } from "./about/about.component";
import { RegionComponent } from "./region/region.component";
import { CountryComponent } from "./country/country.component";
import { PageNotFoundComponent } from "./404/404.component";


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutComponent,
    RegionComponent,
    CountryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
