import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanceladoPage } from './cancelado.page';

const routes: Routes = [
  {
    path: '',
    component: CanceladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanceladoPageRoutingModule {}
