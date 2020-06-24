import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StribngPageRoutingModule } from './stribng-routing.module';

import { StribngPage } from './stribng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StribngPageRoutingModule
  ],
  declarations: [StribngPage]
})
export class StribngPageModule {}
