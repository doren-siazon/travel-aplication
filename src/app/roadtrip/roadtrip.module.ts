import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoadtripPageRoutingModule } from './roadtrip-routing.module';

import { RoadtripPage } from './roadtrip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoadtripPageRoutingModule
  ],
  declarations: [RoadtripPage]
})
export class RoadtripPageModule {}
