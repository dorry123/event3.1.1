import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL } from '../constants';
import { Evento } from '../model/evento.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventoService {
    constructor(private http: HttpClient) {
    }

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

/* 
    listAppelli(idInsegnamento): Observable<Appello[]> {
        const appelliUrl = `${URL.INSEGNAMENTI}/${idInsegnamento}/appelli`;
        return this.http.get<Appello[]>(appelliUrl);
    } */
/* 
    createAppello(appello: Appello) {
        return this.http.post<Appello>(URL.APPELLI, appello);
    }

    findAppelloById(idAppello: number): Observable<Appello> {
        const appelloUrl = `${URL.APPELLI}/${idAppello}`;
        return this.http.get<Appello>(appelloUrl);
    }

    updateAppello(appello: Appello) {
        return this.http.put<Appello>(URL.APPELLI, appello);
    }

    deleteAppello(appello: Appello) {
        const deleteUrl = `${URL.APPELLI}/${appello.id}`;
        return this.http.delete<Appello>(deleteUrl);
    } */
}
