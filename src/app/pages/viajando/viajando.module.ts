import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajandoPageRoutingModule } from './viajando-routing.module';

import { ViajandoPage } from './viajando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajandoPageRoutingModule
  ],
  declarations: [ViajandoPage]
})
export class ViajandoPageModule {}
