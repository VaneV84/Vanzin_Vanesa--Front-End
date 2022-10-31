import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';


@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  URL = environment.URL + 'proyectos/';

  constructor(private httpClient: HttpClient) {}

  public list(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + 'list');
  }

  public find(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `find/${id}`);
  }

  public create(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}