import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageAuctionsPageRoutingModule } from './manage-auctions-routing.module';

import { ManageAuctionsPage } from './manage-auctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageAuctionsPageRoutingModule
  ],
  declarations: [ManageAuctionsPage]
})
export class ManageAuctionsPageModule {}
