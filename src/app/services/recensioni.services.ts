import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL } from '../constants';
import { Recensioni } from '../model/recensione.module';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecensioniService {
    constructor(private http: HttpClient) {
    }

    listRecensione(): Observable<Recensioni[]> {
        return this.http.get<Recensioni[]>(URL.ALL_NOTE);
        console.log(URL.ALL_NOTE);
    }

    findRecensioneById(idNota: number): Observable<Recensioni> {
        const recUrl = `${URL.FIND_NOTA_BYID}/${idNota}`;
        return this.http.get<Recensioni>(recUrl);
    }

    createRecensione(recensione: Recensioni) {
        return this.http.post<Recensioni>(URL.ADD_NOTA, recensione);
    }

    updateRecensione(recensione: Recensioni) {
        return this.http.put<Recensioni>(URL.UPDATE_NOTA, recensione);
    }

    deleteRecensione(recensione: Recensioni) {
        const deleteUrl = `${URL.DELETE_NOTA}/${recensione.id}`;
        return this.http.delete<Recensioni>(deleteUrl);
    }

}
