import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeConPage } from './viaje-con.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeConPageRoutingModule {}
