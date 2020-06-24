import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjektPage } from './objekt.page';

const routes: Routes = [
  {
    path: '',
    component: ObjektPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjektPageRoutingModule {}
