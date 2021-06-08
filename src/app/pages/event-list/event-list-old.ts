import { Component } from '@angular/core';
import { EventData } from '../../providers/event-data';

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
  styleUrls: ['./event-list.scss'],
})
export class EventListPage {
  evento: any[] = [];

  constructor(public eventData: EventData) {}

  ionViewDidEnter() {
    this.eventData.getEvents().subscribe((evento: any[]) => {
      this.evento = evento;
    });
  }
}
