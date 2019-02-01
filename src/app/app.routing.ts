import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { IndexComponent } from './index/index.component';
import { StoreComponent } from './store/store.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'store', component: StoreComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
