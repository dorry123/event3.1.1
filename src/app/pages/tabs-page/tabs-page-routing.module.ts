import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { NewsPage } from '../news/news';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      }, 
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () => import('../event-list/event-list.module').then(m => m.EventListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'evento/:id',
            loadChildren: () => import('../event-detail/event-detail.module').then(m => m.EventDetailModule)
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () => import('../news/news.module').then(m => m.NewsModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },

      {
        path: 'recensioni',
        children: [
          {
            path: '',
            loadChildren: () => import('../recensioni-list/recensioni-list.module').then(m => m.RecensioniListModule)
          },
          {
            path: 'recensioni/:id',
            loadChildren: () => import('../recensioni/recensioni.module').then(m => m.RecensioniModule)
          }
        ]
      },
      {
        path: 'categorie/all',
        children: [
          {
            path: '',
            loadChildren: () => import('../categorie/categorie.module').then(m => m.CategorieModule)
          }

        ]
      },

      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () => import('../news/news.module').then(m => m.NewsModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

