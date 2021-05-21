import { Component, OnInit } from '@angular/core';
import { Nota } from '../notas';

@Component({
  selector: 'app-lista-nota',
  templateUrl: './lista-nota.component.html',
  styleUrls: ['./lista-nota.component.scss']
})
export class ListaNotaComponent implements OnInit {

  lista:Array<Nota> = [
    {titulo: "Hola", estado: "Abierto", descripcion: "lorem ipsum"},
    {titulo: "Chao", estado: "Cerrado", descripcion: "lorem ipsum"},
    {titulo: "Como estas?", estado: "En Proceso", descripcion: "lorem ipsum"},
    {titulo: "Hola", estado: "Abierto", descripcion: "lorem ipsum"},
    {titulo: "Chao", estado: "Cerrado", descripcion: "lorem ipsum"},
    {titulo: "Como estas?", estado: "En Proceso", descripcion: "lorem ipsum"},
    {titulo: "Hola", estado: "Abierto", descripcion: "lorem ipsum"},
    {titulo: "Chao", estado: "Cerrado", descripcion: "lorem ipsum"},
    {titulo: "Como estas?", estado: "En Proceso", descripcion: "lorem ipsum"}
  ]; 
  
  abierto:Array<Nota> = [];
  cerrado:Array<Nota> = [];
  en_proceso:Array<Nota> = [];


  constructor() { }

  ngOnInit(): void {

    this.abierto = this.lista.filter(
      nota => nota.estado == "Abierto" );

    this.cerrado = this.lista.filter(
      nota => nota.estado == "Cerrado" );
      
    this.en_proceso = this.lista.filter(
      nota => nota.estado == "En Proceso" );


  }

}
