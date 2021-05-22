import { Component, OnInit } from '@angular/core';
import { Nota } from '../notas';
import { ServicioNotasService } from '../servicio-notas.service';

@Component({
  selector: 'app-lista-nota',
  templateUrl: './lista-nota.component.html',
  styleUrls: ['./lista-nota.component.scss']
})
export class ListaNotaComponent implements OnInit {

  lista:Array<Nota> = []; 
  
  abierto:Array<Nota> = [];
  cerrado:Array<Nota> = [];
  en_proceso:Array<Nota> = [];


  constructor(private servicio:ServicioNotasService) { }

  ngOnInit(): void {

    this.servicio.consultarNotas().subscribe( datos =>{
      this.lista = datos;

      console.log(this.lista);
      console.log(this.lista[0].estado);
    });

    this.abierto = this.lista.filter(
      nota => nota.estado == "Abierto" );
    
    console.log("Abierto: ");
    console.log(this.abierto);

    this.cerrado = this.lista.filter(
      nota => nota.estado == "Cerrado" );

    console.log("Cerrado: ");
    console.log(this.cerrado);
      
    this.en_proceso = this.lista.filter(
      nota => nota.estado == "En Proceso" );

    console.log("En Proceso: ");
    console.log(this.en_proceso);
  }



}
