import { Component, OnInit } from '@angular/core';
import {ListaClimas,Climas} from '../../interfaces/climas';
import {ActivatedRoute,Route} from'@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
}) 

export class BodyComponent implements OnInit {
  ListaClimas=ListaClimas;
  idRegion:number=0;
  clima:any;
  activeId:any=1;

  mostrarClimaValparaiso() {
    return this.ListaClimas.filter((ListaClimas) => ListaClimas.idRegion==1);
  }

  constructor(private ruta:ActivatedRoute) { 
    this.ruta.params.subscribe(datos=>{
      this.idRegion=datos["idRegion"];
    })
  }

  ngOnInit(): void {
   this.clima=ListaClimas.find(objeto=>objeto.idRegion==this.idRegion);
  }
}