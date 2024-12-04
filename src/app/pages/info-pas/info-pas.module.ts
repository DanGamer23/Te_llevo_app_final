import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPasPageRoutingModule } from './info-pas-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { InfoPasPage } from './info-pas.page';
import { ClimaComponent } from 'src/app/components/clima/clima.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    InfoPasPageRoutingModule
  ],
  declarations: [InfoPasPage,ClimaComponent]
})
export class InfoPasPageModule {}
