
import {TipoEvento} from './tipoevento.model';

export class Evento {
    id: number;
    id_utente: number;
    tipo_evento: TipoEvento;
    nome_evento: string;
    evento_speciale: number;
    data_inizio: string;
    data_fine: string;
    localita: string;
    indirizzo: string;
    cap:string;
    costo:number;
    sconto: number;
    descrizione:string;
    img: string;
}