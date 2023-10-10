import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PgInicioComponent}from './Modulos/pg-inicio/pg-inicio.component';
import {PgConveniosComponent} from'./Modulos/Admin-Convenios/Analista-Vinculacion/pg-convenios/pg-convenios.component';

const routes: Routes = [
  {path: '', component:PgInicioComponent},
  {path:'PgConveniosComponent', component:PgConveniosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
