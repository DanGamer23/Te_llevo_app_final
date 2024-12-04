import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { IonicModule } from '@ionic/angular';

import { P404PageRoutingModule } from './p404-routing.module';

import { P404Page } from './p404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P404PageRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  declarations: [P404Page]
})
export class P404PageModule {}
