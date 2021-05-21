import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nota } from '../notas';

@Component({
  selector: 'app-ver-nota',
  templateUrl: './ver-nota.component.html',
  styleUrls: ['./ver-nota.component.scss'],
})

export class VerNotaComponent implements OnInit {

  formulario:FormGroup;
  lista:Array<Nota> = [];

  constructor(public form:FormBuilder) { 

    this.formulario = this.form.group({
      nombre:['', Validators.required],
      estado:['', Validators.required],
      descripcion:['', Validators.required]

    })

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.lista.push(this.formulario.value);
  }

}
