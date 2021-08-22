import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CruisePage } from './cruise.page';

const routes: Routes = [
  {
    path: '',
    component: CruisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CruisePageRoutingModule {}
