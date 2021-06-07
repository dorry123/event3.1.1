import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecensioniListPage } from './recensioni-list';
const routes: Routes = [
  {
    path: '',
    component: RecensioniListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecensioniListPageRoutingModule {}
