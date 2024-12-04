import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinConPageRoutingModule } from './fin-con-routing.module';

import { FinConPage } from './fin-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinConPageRoutingModule
  ],
  declarations: [FinConPage]
})
export class FinConPageModule {}
