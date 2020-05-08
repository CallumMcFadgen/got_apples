import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrowersPage } from './growers.page';

const routes: Routes = [
  {
    path: '',
    component: GrowersPage
  },
  {
    path: 'grower',
    loadChildren: () => import('./grower/grower.module').then( m => m.GrowerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrowersPageRoutingModule {}
