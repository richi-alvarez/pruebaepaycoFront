import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Whallet } from '../models/whallet';
import { global } from './global';



@Injectable()
export class WhalletService{

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    recargar(token, whallet):Observable<any>{
        let json = JSON.stringify(whallet);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
        .set('Authorization', token)
        ;
        return this._http.post(this.url+'recargar', params, {headers:headers});
    }

    pagar(token, whallet):Observable<any>{
        let json = JSON.stringify(whallet);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
        .set('Authorization', token)
        ;
        return this._http.post(this.url+'pagar', params, {headers:headers});
    }

    confirmar(token,whallet):Observable<any>{
        let json = JSON.stringify(whallet);
        let sessionId = localStorage.getItem('idSession');
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
        .set('Authorization', token)
        .set('sessionId', sessionId)
        ;
        return this._http.post(this.url+'confirmar', params, {headers:headers});
    }

    consultar(token, whallet):Observable<any>{
        let json = JSON.stringify(whallet);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
        .set('Authorization', token)
        ;
        return this._http.post(this.url+'consultar', params, {headers:headers});
    }


}