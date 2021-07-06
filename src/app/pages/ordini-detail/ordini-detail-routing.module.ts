import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdiniDetailPage } from './ordini-detail';

const routes: Routes = [
  {
    path: '',
    component: OrdiniDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdiniDetailPageRoutingModule { }
