import { Fatura } from './../../interface/fatura';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck, tap, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FaturaService {

  constructor(private http: HttpClient) { }

  getFaturas(id: any): Observable<any> {
    return this.http.get<Fatura[]>(`https://api.dev.grupogera.com/processo-seletivo/fatura`).pipe(
      tap(dados => console.log(dados)),
      map(dados => dados.filter(dados => dados.unidadeConsumidoraId == id)),
      tap(dados => console.log(dados))
    )
  }
}
