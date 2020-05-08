import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrowerPage } from './grower.page';

const routes: Routes = [
  {
    path: '',
    component: GrowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrowerPageRoutingModule {}
