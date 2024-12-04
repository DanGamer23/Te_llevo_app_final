import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinPasPageRoutingModule } from './fin-pas-routing.module';

import { FinPasPage } from './fin-pas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinPasPageRoutingModule
  ],
  declarations: [FinPasPage]
})
export class FinPasPageModule {}
