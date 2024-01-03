import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PgInicioComponent}from './Modulos/pg-inicio/pg-inicio.component';
import {PgConveniosComponent} from'./Modulos/Admin-Convenios/Analista-Vinculacion/pg-convenios/pg-convenios.component';
import { AppSeguridadComponent } from './Modulos/Mod-Seguridad/app-seguridad/app-seguridad.component';
import { PgAdminConveniosCoordComponent } from './Modulos/Admin-Convenios/Coordinador/pg-admin-convenios-coord/pg-admin-convenios-coord.component';
import { PgInformesConvenioComponent } from './Modulos/Admin-Convenios/Coordinador/pg-informes-convenio/pg-informes-convenio.component';

const routes: Routes = [
  {path: '', component:PgInicioComponent},
  {path:'PgConveniosComponent', component:PgConveniosComponent},
  {path: 'AppSeguridadComponent',component:AppSeguridadComponent},
  {path: 'PgAdminConveniosCoordComponent',component:PgAdminConveniosCoordComponent},
  {path: 'PgInformesConvenio',component:PgInformesConvenioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
