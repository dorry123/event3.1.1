export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/eventapp/api/';

//'http://localhost:8080/eventapp/api';

export const URL = {
    //User
    LOGIN: URL_BASE + 'http://localhost:8080/user/loginUser/request',
    LOGOUT: URL_BASE + '/logout',
    GET_USERS: 'http://localhost:8080/user/all',
    UPDATE_PROFILO: 'http://localhost:8080/user/update/{IdUser}',
    INSERT_USER: 'http://localhost:8080/user/saveUser',
    GET_DATA_USER: 'http://localhost:8080/user/getData',
    GET_USER_BYID: 'http://localhost:8080/user/{idUser}',

    //Note - Recensione
    ADD_NOTA: URL_BASE + 'http://note/addnota',
    ALL_NOTE: 'http://localhost:8080/note/all',
    GET_NOTA_BYID: 'http://localhost:8080/note/{IdNota}',                     //+NoteID
    UPDATE_NOTA: 'http://localhost:8080/note/update/{IdNota}',                //+NoteID
    FIND_NOTA_BYIDUSER: URL_BASE + '/note/user/',           //+UserID
    DELETE_NOTA: 'http://localhost:8080/note/delete/Id',           //+UserID

    //Evento
    ALL_EVENTI: 'http://localhost:8080/evento/all',
    ADD_EVENTO: 'http://localhost:8080/evento/add',
    FIND_EVENTO_BYID:  'http://localhost:8080/evento/{id}',              //+EventoID verificare
    UPDATE_EVENTO: 'http://localhost:8080/evento/update/{id}',       //+EventoID
    DELETE_EVENTO: 'http://localhost:8080/evento/delete/{id}',           //+EventoID verificare

    //News
    ALL_NEWS: 'http://localhost:8080/note/all',
    ADD_NEWS: 'http://localhost:8080/note/addnota',
    GET_NEWS_BYUSERID: URL_BASE + '/news/user/',                         //+UserID
    UPDATE_NEWS: 'http://localhost:8080/note/update/{IdNota}',                            //+NewsID
    FIND_NEWS_BYID: 'http://localhost:8080/note/{IdNota}'                                  //+NewsID
};

    //http://localhost:8080/evento/all
    //ALL_EVENTI: URL_BASE + '/evento/all',

export const X_AUTH = 'X-Auth';
export const AUTH_TOKEN = 'auth-token';
export const UTENTE_STORAGE = 'utente';
export const LINGUA = 'lingua';
