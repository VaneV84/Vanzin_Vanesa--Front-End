import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { hys } from '../model/hys';

@Injectable({
  providedIn: 'root'
})
export class HysService {
  URL = environment.URL + 'hys/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<hys[]>{
    return this.httpClient.get<hys[]>(this.URL + 'list');
  }

  public find(id: number): Observable<hys>{
    return this.httpClient.get<hys>(this.URL + `find/${id}`);
  }

  public create(hys: hys): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, hys);
  }

  public update(id: number, hys: hys): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, hys);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}