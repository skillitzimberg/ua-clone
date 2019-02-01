import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { SecondaryBucketComponent } from './secondary-bucket/secondary-bucket.component';
import { SpecialContentComponent } from './special-content/special-content.component';
import { SocialShopComponent } from './social-shop/social-shop.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './store/store.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';

import { routing } from './app.routing';
import { StoreHeaderComponent } from './store-header/store-header.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    FooterComponent,
    StoreComponent,
    PageNotFoundComponent,
    IndexComponent,
    StoreHeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
