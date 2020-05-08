import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrowersPageRoutingModule } from './growers-routing.module';

import { GrowersPage } from './growers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrowersPageRoutingModule
  ],
  declarations: [GrowersPage]
})
export class GrowersPageModule {}
