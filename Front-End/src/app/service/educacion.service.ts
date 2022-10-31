import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = environment.URL + 'educacion/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'list');
  }

  public find(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `find/${id}`);
  }

  public create(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}