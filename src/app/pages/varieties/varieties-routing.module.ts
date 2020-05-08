import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VarietiesPage } from './varieties.page';

const routes: Routes = [
  {
    path: '',
    component: VarietiesPage
  },
  {
    path: 'variety',
    loadChildren: () => import('./variety/variety.module').then( m => m.VarietyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VarietiesPageRoutingModule {}
