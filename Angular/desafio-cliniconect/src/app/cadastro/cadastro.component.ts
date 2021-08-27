import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CadastroService } from './service/cadastro.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroSvc:CadastroService
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({


        nome: [null, Validators.required],
        telefone: [null, Validators.required],
        dataNasc: [null, Validators.required],
        sexo: [null, Validators.required],
        naturalidade: [null, Validators.required],
        estadocivil: [null, Validators.required],
        profissao: [null, Validators.required],
        
        cidade: [null, Validators.required],
        bairro: [null, Validators.required],
        endresidencial: [null, Validators.required],
        endcomercial: [null, Validators.required],
        
        dgclini:[null, Validators.required],
        dgfisio:[null, Validators.required]
      
      
    })
  }


  onSubmit() {
    if(this.formulario.valid){
      this.cadastroSvc.adicionaCadastro(this.formulario.value)
      .subscribe(dados=>{
        console.log(dados),
        this.formulario.reset()},
        (errors:any)=>alert('erro'))

    } else {
      console.log("Formulario Invalido")
     
    }
    
  }
  reset(){
    this.formulario.reset();
  }



  verificaNotValidTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  verificaValidTouched(campo){
    return this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
    aplicaCssErro(campo){
      return{
        'has-error': this.verificaNotValidTouched(campo),
        'has-valid': this.verificaValidTouched(campo)    
    }
      

}
}