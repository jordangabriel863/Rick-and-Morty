import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { UnidadeConsumidora } from 'src/app/interface/unidade-consumidora';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  constructor(private http: HttpClient) { }

 public  getUnidades():Observable<any>{
    return this.http.get<any>('https://api.dev.grupogera.com/processo-seletivo/unidadeConsumidora').pipe(
      tap(dados => console.log(dados))
    )
  }
  getUnidadeId(id):Observable<any>{
    return this.http.get<UnidadeConsumidora[]>(`https://api.dev.grupogera.com/processo-seletivo/unidadeConsumidora/${id}`).pipe(
      tap(dados => console.log(dados))
    )
  }
  removerUnidade(id:any){
    return this.http.delete(`https://api.dev.grupogera.com/processo-seletivo/unidadeConsumidora/${id}`)
  }
}
