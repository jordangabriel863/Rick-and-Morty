import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { CadastroService } from '../cadastro/service/cadastro.service';
import { Cadastros } from './Interface/cadastros';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cadastros: Cadastros
  exibeDetalhes: boolean = true
  exibeDetalhesPersonalizado: boolean = true
  exibeDashboard: boolean = true
  detalhesDashboard: Observable<any>
  detalhesDashboardPersonalizados: Observable<any>
  Allcadastros

  queryField = new FormControl();
  results: Observable<any>;

  constructor(private cadastroSvc: CadastroService) {
    this.Allcadastros = this.cadastroSvc.getCadastros();


  }

  ngOnInit(): void {
    this.mostraDetalhesDashboard("Jordan");
  }

  onSearch() {
    let value = this.queryField.value
    //se o usaurio nao digitou nada e a busca é diferente de vazio

    if (value && (value = value.trim()) !== '') {
      this.results = this.cadastroSvc.getCliente(value)
      console.log(value)
      this.exibeDashboard = false;
    } else {
      this.exibeDashboard = true;
    }


  }

  mostraDetalhes() {
    this.exibeDetalhes = !this.exibeDetalhes
  }
  mostraDetalhesPersonalizado(paciente) {
    this.detalhesDashboardPersonalizados = this.cadastroSvc.getDetalhesDashboardPersonalizado(paciente)
    this.exibeDetalhesPersonalizado = !this.exibeDetalhesPersonalizado
  }
  fechaDetalhesPersonalizado() {
    this.exibeDetalhesPersonalizado = !this.exibeDetalhesPersonalizado
  }

  mostraDetalhesDashboard(paciente) {
    this.detalhesDashboard = this.cadastroSvc.getDetalhesDashboard(paciente)
    this.exibeDetalhes = !this.exibeDetalhes

  }
  fechaDetalhesDashboard() {
    this.exibeDetalhes = !this.exibeDetalhes
  }





}
