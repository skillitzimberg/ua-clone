import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { StoreComponent } from './store/store.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'index', component: IndexComponent },
  { path: 'men', component: StoreComponent },
  { path: 'women', component: StoreComponent },
  { path: 'boys', component: StoreComponent },
  { path: 'girls', component: StoreComponent },
  { path: 'shoes', component: StoreComponent },
  { path: 'outlet', component: StoreComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
