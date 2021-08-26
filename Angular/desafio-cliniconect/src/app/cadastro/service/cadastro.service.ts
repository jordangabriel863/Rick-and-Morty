import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }


  getCadastros(): Observable<any>{
    return this.http.get<any>('https://my-json-server.typicode.com/Jordangabriel893/searchApi/cadastros').pipe(
      tap(dados=>console.log(dados))
    )
  }

  getCliente(cliente):Observable<any>{
    return this.http.get<any>(`https://my-json-server.typicode.com/Jordangabriel893/searchApi/${cliente}`).pipe(
      tap(dados=> console.log(dados))
    )
  }

  getDetalhesDashboard(paciente){
    return this.http.get<any>(`https://my-json-server.typicode.com/Jordangabriel893/searchApi/${paciente}`)
  }
  getDetalhesDashboardPersonalizado(paciente){
    return this.http.get<any>(`https://my-json-server.typicode.com/Jordangabriel893/searchApi/${paciente}`)
  }
  adicionaCadastro(novoCadastro): Observable<any>{
    return this.http.post('https://my-json-server.typicode.com/Jordangabriel893/searchApi/cadastros', novoCadastro)
  }
}
