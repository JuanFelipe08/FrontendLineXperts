import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  private url = environment.URL;
  public httpOptions:any;

  constructor(public http:HttpClient) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };
  }

  apiListas(tipo: string){
    const apiUrl = `${this.url}/${tipo}`;
    return this.http.get(`${apiUrl}`, this.httpOptions).pipe(map( data => data)).toPromise();    
  }

  apiPostJSON(form: any, tipo: string){
    const apiUrl = `${this.url}/${tipo}`;
    let json = form;
    json = JSON.stringify(json);
    return this.http.post(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
  }

  apiPutJSON(form: any, tipo: string){
    const apiUrl = `${this.url}/${tipo}`;
    let json = form;
    json = JSON.stringify(json);
    return this.http.put(`${apiUrl}`, json, this.httpOptions).pipe(map( data => data)).toPromise();
  }
}
