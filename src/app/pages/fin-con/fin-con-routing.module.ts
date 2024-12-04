import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinConPage } from './fin-con.page';

const routes: Routes = [
  {
    path: '',
    component: FinConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinConPageRoutingModule {}
