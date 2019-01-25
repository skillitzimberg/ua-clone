import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainNavComponent,
    TopSectionComponent,
    NewArrivalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
