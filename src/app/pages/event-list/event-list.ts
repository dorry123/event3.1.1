import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { EventData } from '../../providers/event-data';
import {EventoService} from '../../services/evento.service';
import {Evento} from '../../model/evento.model';

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
  styleUrls: ['./event-list.scss'],
})


// export class EventListPage {
//   evento: any[] = [];

//   constructor(public eventData: EventData) {}

//   ionViewDidEnter() {
//     this.eventData.getEvents().subscribe((evento: any[]) => {
//       this.evento = evento;
//     });
//   }
// }


export class EventListPage implements OnInit {
  private eventi$: Observable<Evento[]>;
  constructor(private eventoService: EventoService) {}

    ngOnInit() {
    this.eventi$ = this.eventoService.listEventi();
  }

    openDettaglioEvento(e: Evento) {
    // DO nothing
  }



/*    ionViewDidEnter() {
    this.eventData.getEvents().subscribe((evento: any[]) => {
      this.evento = evento;
    });
  }  */

}