import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdiniPage } from './ordini';
const routes: Routes = [
  {
    path: '',
    component: OrdiniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdiniPageRoutingModule {}
