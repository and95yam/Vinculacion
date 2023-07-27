import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PgPrincipalSeguridadComponent } from './componentes/pg-principal-seguridad/pg-principal-seguridad.component';

const routes: Routes = [
  
  {
    path: '',
    children: [
      {
        path: 'principalseguridad',
        component:  PgPrincipalSeguridadComponent,
      }
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
