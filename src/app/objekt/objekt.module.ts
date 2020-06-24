import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjektPageRoutingModule } from './objekt-routing.module';

import { ObjektPage } from './objekt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjektPageRoutingModule
  ],
  declarations: [ObjektPage]
})
export class ObjektPageModule {}
