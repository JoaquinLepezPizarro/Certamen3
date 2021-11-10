import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './componentes/header/header.component';
import {BodyComponent} from './componentes/body/body.component';
import {Body2Component} from './componentes/body2/body2.component';
import {FormularioComponent} from './componentes/formulario/formulario.component'
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path: "header", component:HeaderComponent},
  {path: "body", component:BodyComponent},
  {path: "body2", component:Body2Component},
  {path: "formulario", component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }