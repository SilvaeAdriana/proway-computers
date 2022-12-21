import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato: FormGroup = this.fb.group({

    nome:['', [//"" --> começa com nada e tem um mínimo e é obrigatório
      Validators.minLength(4),
      Validators.required
    ]],


    assunto:['', [
      Validators.minLength(10),
      Validators.required
    ]],


    telefone:['', [
      Validators.minLength(11),
      Validators.required

    ]],


    email:['',[
      Validators.minLength(10),
      Validators.required
    ]],

    mensagem:['',[
      Validators.minLength(20),
      Validators.required
    ]],

});




  constructor(
    private fb: FormBuilder
  ){

  }


  ngOnInit(): void {
  
  }

  enviarFormulario(){
    alert("Mensagem enviada com sucesso!");
    this.formContato.reset();
  }
  
  
  


}
