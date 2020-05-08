import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'manage-auctions',
    loadChildren: () => import('./manage-auctions/manage-auctions.module').then( m => m.ManageAuctionsPageModule)
  },
  {
    path: 'manage-account',
    loadChildren: () => import('./manage-account/manage-account.module').then( m => m.ManageAccountPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
