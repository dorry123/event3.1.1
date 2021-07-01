import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../model/evento.model';
import {Observable} from 'rxjs';
import { URL } from '../constants';

@Injectable({
    providedIn: 'root'
})
export class EventoService {

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

// da provare
    findEventoByCategoria(idEvento: number): Observable<Evento> {
         const eventoUrl = `${URL.FIND_EVENTO_BYCATEGORIA}/${idEvento}`;
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



}
