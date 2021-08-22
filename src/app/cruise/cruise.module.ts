import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CruisePageRoutingModule } from './cruise-routing.module';

import { CruisePage } from './cruise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CruisePageRoutingModule
  ],
  declarations: [CruisePage]
})
export class CruisePageModule {}
