import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgPrincipalSeguridadComponent } from './componentes/pg-principal-seguridad/pg-principal-seguridad.component';
import { PgUsuariosComponent } from './componentes/pg-usuarios/pg-usuarios.component';
import { PgRolesComponent } from './componentes/pg-roles/pg-roles.component';
import { PgOpcionesComponent } from './componentes/pg-opciones/pg-opciones.component';
import { PgPermisosComponent } from './componentes/pg-permisos/pg-permisos.component';
import { PgAsignacionOpcionesComponent } from './componentes/pg-asignacion-opciones/pg-asignacion-opciones.component';
import { PgAsignacionReglamentoComponent } from './componentes/pg-asignacion-reglamento/pg-asignacion-reglamento.component';
import { PgReglamentoComponent } from './componentes/pg-reglamento/pg-reglamento.component';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { MensajesModuloSeguridad } from 'src/app/herramientas/Mensajes/MensajesModuloSeguridad.component';
import { ConfirmationService } from 'primeng-lts/api';
import { MessageService } from 'primeng-lts/api';
@NgModule({
  declarations: [PgPrincipalSeguridadComponent, PgUsuariosComponent, PgRolesComponent, PgOpcionesComponent, PgPermisosComponent, PgAsignacionOpcionesComponent, PgAsignacionReglamentoComponent, PgReglamentoComponent],
  imports: [
    CommonModule, SeguridadRoutingModule,HttpClientModule,PrimeNgModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [MessageService, ConfirmationService, MensajesModuloSeguridad]

})
export class SeguridadModule { }
