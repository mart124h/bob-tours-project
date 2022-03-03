import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionsPage } from './regions.page';

const routes: Routes = [
  {
    path: '',
    component: RegionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionsPageRoutingModule {}
