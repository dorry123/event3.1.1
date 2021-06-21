import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../model/evento.model';
import {Observable} from 'rxjs';
import { URL } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class EventoService {

    //public events: Evento[] = [];
    //public evento: Evento;
    //public loaded = false;

    constructor(private http: HttpClient) {
    }
    private res: any;
    listEventi(): Observable<Evento[]> {
        return this.http.get<Evento[]>(URL.ALL_EVENTI);
        console.log(URL.ALL_EVENTI);
    }

    findEventoById(idEvento: number): Observable<Evento> {
        const eventoUrl = `${URL.FIND_EVENTO_BYID}/${idEvento}`;
        return this.http.get<Evento>(eventoUrl);
    }

    createEvento(evento: Evento) {
        return this.http.post<Evento>(URL.ADD_EVENTO, evento);
    }

    updateEvento(evento: Evento) {
        return this.http.put<Evento>(URL.UPDATE_EVENTO, evento);
    }

    deleteEvento(evento: Evento) {
        const deleteUrl = `${URL.DELETE_EVENTO}/${evento.id}`;
        return this.http.delete<Evento>(deleteUrl);
    }

/*   load(): Promise<boolean> {

    // Return a promise so that we know when this operation has completed
    return new Promise((resolve) => {
      // Get the notes that were saved into storage
  this.http.get<Evento[]>(URL.ALL_EVENTI).subscribe(response => console.log(response));
  this.listEventi().subscribe(result => console.log(result));
  this.storage.get('events').then((events) => console.log(events));
  this.listEventi().subscribe(result => {

        // Only set this.notes to the returned value if there were values stored
        if (result != null){
          this.events = result;
        }
        // this.getAllNote().subscribe(result => this.notes  = result) ;
        // This allows us to check if the data has been loaded in or not
        this.loaded = true;
        resolve(true);
      });
    });
  } */
// ---------fine metodo



}
