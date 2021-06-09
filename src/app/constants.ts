export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/eventapp/api/';

//'http://localhost:8080/eventapp/api';

export const URL = {
    LOGIN: URL_BASE + '/user/loginUser/request',
    LOGOUT: URL_BASE + '/logout',
    UPDATE_PROFILO: URL_BASE + '/user/update',
    INSERT_USER: URL_BASE + '/user/saveUser',
    GET_DATA_USER: URL_BASE + '/user/getData',
    GET_USER_BYID: URL_BASE + '/user',
    GET_USERS: URL_BASE + '/user/all',

    ADD_NOTA: URL_BASE + '/note/addnota',
    ALL_NOTE: URL_BASE + '/note/all',
    GET_NOTA_BYID: URL_BASE + '/note/',                     //+NoteID
    UPDATE_NOTA: URL_BASE + '/note/update/',                //+NoteID
    FIND_NOTA_BYIDUSER: URL_BASE + '/note/user/',           //+UserID
    DELETE_NOTA: URL_BASE + '/note/delete/user/',           //+UserID

    //http://localhost:8000/evento/all
    ALL_EVENTI: URL_BASE + '/evento/all',
    ADD_EVENTO: URL_BASE + '/evento/add',
    GET_EVENTO_BYID: URL_BASE + '/evento/',                         //+EventoID
    UPDATE_EVENTO: URL_BASE + '/evento/update/',                    //+EventoID
    FIND_EVENTO_BYID: URL_BASE + '/evento/',                        //+EventoID

    ALL_NEWS: URL_BASE + '/news/all',
    ADD_NEWS: URL_BASE + '/news/add',
    GET_NEWS_BYUSERID: URL_BASE + '/news/user/',                         //+UserID
    UPDATE_NEWS: URL_BASE + '/news/update/',                            //+NewsID
    FIND_NEWS_BYID: URL_BASE + '/news/'                                  //+NewsID
};

export const X_AUTH = 'X-Auth';
export const AUTH_TOKEN = 'auth-token';
export const UTENTE_STORAGE = 'utente';
export const LINGUA = 'lingua';
