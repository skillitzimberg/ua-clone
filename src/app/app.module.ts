import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { SecondaryBucketComponent } from './secondary-bucket/secondary-bucket.component';
import { SpecialContentComponent } from './special-content/special-content.component';
import { SocialShopComponent } from './social-shop/social-shop.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainNavComponent,
    TopSectionComponent,
    NewArrivalsComponent,
    SecondaryBucketComponent,
    SpecialContentComponent,
    SocialShopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
