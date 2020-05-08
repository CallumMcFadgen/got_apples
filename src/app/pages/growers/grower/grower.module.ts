import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrowerPageRoutingModule } from './grower-routing.module';

import { GrowerPage } from './grower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrowerPageRoutingModule
  ],
  declarations: [GrowerPage]
})
export class GrowerPageModule {}
