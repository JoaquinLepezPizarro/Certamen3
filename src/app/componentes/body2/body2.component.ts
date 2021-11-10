import { Component, OnInit } from '@angular/core';
import {ListaClimas,Climas} from '../../interfaces/climas';
import {ActivatedRoute,Route} from'@angular/router';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.component.html',
  styleUrls: ['./body2.component.scss']
})

export class Body2Component implements OnInit {
  ListaClimas=ListaClimas;
  idRegion:number=0;
  clima:any;
  activeId:any=1;

  mostrarClimaTalca() {
    return this.ListaClimas.filter((ListaClimas) => ListaClimas.idRegion==2);
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
