import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(private http:HttpClient) { 
  }

  getPersonagens() : Observable<any>{
  return this.http.get<any>("https://rickandmortyapi.com/api/character").pipe(
    tap(valor => console.log(valor)),
    pluck("results")
  )
  }
}
