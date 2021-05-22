import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nota } from '../notas';
import { ServicioNotasService } from '../servicio-notas.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ver-nota',
  templateUrl: './ver-nota.component.html',
  styleUrls: ['./ver-nota.component.scss'],
})

export class VerNotaComponent implements OnInit {

  formulario:FormGroup;
  lista:Array<Nota> = [];

  constructor(public form:FormBuilder, private servicio:ServicioNotasService, private route:Router) { 

    this.formulario = this.form.group({
      titulo:['', Validators.required],
      estado:['', Validators.required],
      descripcion:['', Validators.required]

    })

  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.lista.push(this.formulario.value);
    this.servicio.guardarDatos(this.formulario.value).subscribe(datos=>{});
    this.route.navigate(['/listanota']);
    
  }
}