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
      datos.forEach((element: Nota) => {
        if(element.estado == "Abierto")
          this.abierto.push(element);
        if(element.estado == "Cerrado")
          this.cerrado.push(element);
        if(element.estado == "En Proceso")
          this.en_proceso.push(element);
        
      });

    });


  }



}
