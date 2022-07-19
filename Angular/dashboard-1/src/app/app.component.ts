import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Fatura } from './interface/fatura';
import { UnidadeConsumidora } from './interface/unidade-consumidora';
import { FaturaService } from './shared/fatura/fatura.service';
import { UnidadesService } from './shared/unidades/unidades.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  open:boolean = true

  Allunidades:Observable<any>
  unidadesId:UnidadeConsumidora
  exibeUnidades:boolean = true

  results:Observable<any>
  unidadeSearch =  []
  
  queryField = new FormControl();

  openFaturas:boolean = false
  AllFaturas:Observable<any>
  faturas: Fatura
  
  
  constructor(
    private unidadeSvc: UnidadesService,
    private faturaSvc: FaturaService
    ){
    this.Allunidades = this.unidadeSvc.getUnidades()
  }

  openSidebar(){
    this.open = !this.open
  }

  onSearch(){
    let value = this.queryField.value

    if (value && (value = value.trim()) !== '') {
      this.results = this.unidadeSvc.getUnidadeId(value)
      this.exibeUnidades = false;
      
    } else {
      this.exibeUnidades = true;
    }

  }




  removeUnidade(id, distribuidora){
    console.log( `Distribuidora: ${distribuidora} removida`)
    this.unidadeSvc.removerUnidade(id).subscribe(dados => console.log( dados))
  }

  mostraFaturas(id:number){
    this.openFaturas = !this.openFaturas
    console.log(id)
    this.AllFaturas = this.faturaSvc.getFaturas(id)
  }
  fechaFaturas(){
    this.openFaturas = false
  }
}
