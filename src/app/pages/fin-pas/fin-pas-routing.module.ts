import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinPasPage } from './fin-pas.page';

const routes: Routes = [
  {
    path: '',
    component: FinPasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinPasPageRoutingModule {}
