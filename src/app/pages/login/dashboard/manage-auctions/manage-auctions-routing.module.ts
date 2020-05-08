import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageAuctionsPage } from './manage-auctions.page';

const routes: Routes = [
  {
    path: '',
    component: ManageAuctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageAuctionsPageRoutingModule {}
