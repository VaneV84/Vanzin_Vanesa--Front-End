import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  URL = environment.URL + 'idioma/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.URL + 'list');
  }

  public find(id: number): Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.URL + `find/${id}`);
  }

  public create(idioma: Idioma): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, idioma);
  }

  public update(id: number, idioma: Idioma): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, idioma);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}