import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeniorsPage } from './seniors.page';

const routes: Routes = [
  {
    path: '',
    component: SeniorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeniorsPageRoutingModule {}
