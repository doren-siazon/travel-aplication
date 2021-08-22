import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeniorsPageRoutingModule } from './seniors-routing.module';

import { SeniorsPage } from './seniors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeniorsPageRoutingModule
  ],
  declarations: [SeniorsPage]
})
export class SeniorsPageModule {}
