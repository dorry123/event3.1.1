import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecensioniPage } from './recensioni';

const routes: Routes = [
  {
    path: '',
    component: RecensioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecensioniPageRoutingModule { }
