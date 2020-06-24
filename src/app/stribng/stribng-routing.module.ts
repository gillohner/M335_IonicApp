import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StribngPage } from './stribng.page';

const routes: Routes = [
  {
    path: '',
    component: StribngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StribngPageRoutingModule {}
