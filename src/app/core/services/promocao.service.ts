import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/promocao';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor(
    private httpClient : HttpClient
  ) { }

  private apiUrl : string = environment.apiUrl

  list() : Observable<Promocao[]>{
    return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }
}
