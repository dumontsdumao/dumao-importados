import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContat = this.fb.group({
    nome: ["", [
      Validators.minLength(4),// estou dizendo que quero um tamanho minimo de 4 caracteres
      Validators.required //dizer que é obrigatorio
    ]],
    assuntos: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(30),
      Validators.required
    ]]
  });// as chaves serão os campos do formulario
  constructor(
    private fb: FormBuilder, //agrupar todos os campos presentes ali no meu formulario, e permite fazer algumas validações
    
  ) { }

  ngOnInit(): void {
  };

enviarForm() {
  alert("A mensagem foi enviada, obrigado");
  this.formContat.reset;
}
}
