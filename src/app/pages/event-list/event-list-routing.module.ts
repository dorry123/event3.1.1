import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
//import {TranslateModule} from '@ngx-translate/core';

import { EventListPage } from './event-list';
const routes: Routes = [
  {
    path: '',
    component: EventListPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EventListPage]
})
export class EventListPageRoutingModule {}
