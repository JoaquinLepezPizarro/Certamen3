import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ListaClimas,Climas} from '../../interfaces/climas';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  formulario:FormGroup;
  activarMensaje:boolean = false;
   

  constructor(public Form:FormBuilder) { 
    this.formulario=this.Form.group({
      regionNueva:["",Validators.required],
      temperatura:["",[Validators.required, Validators.pattern("^[0-9]*$")]],
      dia:["",Validators.required]
    })
  }

  ngOnInit(): void {
  }

  validacion () {
    this.activarMensaje = true;

  }

  actualizar(ListaClimas:any, formulario:FormBuilder) {
    this.formulario=this.Form.group({
      ListaClimas:[
        {
          region: 'regionNueva',
          idRegion:1,
          nombreDia:"Lunes",
          temperaturaC:20,
          temperaturaF:68,
          estadoClima:"Soleado"
        }
      ]
      /*
      ListaClimas: ListaClimas.splice(0,1, {
        region:"sfdsdaf"
      })*/
    });
  }
}
