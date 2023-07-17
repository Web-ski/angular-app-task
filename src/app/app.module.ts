import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from "./views/start/start.component";
import { RegionComponent } from "./views/region/region.component";
import { CountryComponent } from "./views/country/country.component";
import { PageNotFoundComponent } from "./views/404/404.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutComponent } from "./components/about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    RegionComponent,
    CountryComponent,
    PageNotFoundComponent,
    LoaderComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
