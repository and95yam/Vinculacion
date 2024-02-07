import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PgInicioComponent}from './Modulos/pg-inicio/pg-inicio.component';
import {PgConveniosComponent} from'./Modulos/Admin-Convenios/Analista-Vinculacion/pg-convenios/pg-convenios.component';
import { AppSeguridadComponent } from './Modulos/Mod-Seguridad/app-seguridad/app-seguridad.component';
import { PgAdminConveniosCoordComponent } from './Modulos/Admin-Convenios/Coordinador/pg-admin-convenios-coord/pg-admin-convenios-coord.component';
import { PgInformesConvenioComponent } from './Modulos/Admin-Convenios/Coordinador/pg-informes-convenio/pg-informes-convenio.component';
import { PgInvitadoComponent } from './Modulos/Admin-Convenios/Invitado/pg-invitado/pg-invitado.component';
import { PgAuditoriaComponent } from './Modulos/Seguimiento-Convenios/Auditoria/pg-auditoria/pg-auditoria.component';
import { PgSeguimientoConveniosComponent } from './Modulos/Seguimiento-Convenios/Analista-Vinculacion/pg-seguimiento-convenios/pg-seguimiento-convenios.component';
import { PgGraficasComponent } from './Modulos/Seguimiento-Convenios/Analista-Vinculacion/pg-graficas/pg-graficas.component';
import { PgPrincipalComponent } from './pg-principal/pg-principal.component';
import { PgLoginCasComponent } from './pg-login-cas/pg-login-cas.component';

const routes: Routes = [
  {path:'',component:PgPrincipalComponent},
  {path: 'PgInicio', component:PgInicioComponent},
  {path:'PgConveniosComponent', component:PgConveniosComponent},
  {path: 'AppSeguridadComponent',component:AppSeguridadComponent},
  {path: 'PgAdminConveniosCoordComponent',component:PgAdminConveniosCoordComponent},
  {path: 'PgInformesConvenio',component:PgInformesConvenioComponent},
  {path: 'PgInvitado',component:PgInvitadoComponent},
  {path: 'PgAuditoria',component:PgAuditoriaComponent},
  {path:'PgSeguimiento',component:PgSeguimientoConveniosComponent},
  {path:'PgGraficas',component:PgGraficasComponent},
  {path:'PgPrincipal',component:PgPrincipalComponent},
  {path:'PgCas',component:PgLoginCasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
