import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Depoimento } from '../types/depoimento';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  
  apiUrl : string = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  listarDepoimentos() : Observable<Depoimento[]> {
    return this.httpClient.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
