import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanceladoPageRoutingModule } from './cancelado-routing.module';

import { CanceladoPage } from './cancelado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanceladoPageRoutingModule
  ],
  declarations: [CanceladoPage]
})
export class CanceladoPageModule {}
