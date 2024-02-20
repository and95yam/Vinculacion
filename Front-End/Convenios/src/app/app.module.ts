import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CasClient } from './AutentucacionCas/CasClient';
import { HttpService } from './AutentucacionCas/http.service';



import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';//
import {KnobModule} from 'primeng/knob';

import {CalendarModule} from 'primeng/calendar';//
import {SliderModule} from 'primeng/slider';//
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';

import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';

//import { ConfirmationService } from 'primeng/api';
//import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';




import {BreadcrumbModule} from 'primeng/breadcrumb';
import { AppComponent } from './app.component';
import { PgInicioComponent } from './Modulos/pg-inicio/pg-inicio.component';
import { PgHeaderComponent } from './Modulos/plantillas/pg-header/pg-header.component';
import { PgFooterComponent } from './Modulos/plantillas/pg-footer/pg-footer.component';
import { PgLineaComponent } from './Modulos/plantillas/pg-linea/pg-linea.component';
import { PgMenuComponent } from './Modulos/plantillas/pg-menu/pg-menu.component';
import {TableModule} from 'primeng/table';//
import { RatingModule } from 'primeng/rating';
import{FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {ChartModule} from 'primeng/chart';



import { PgConveniosComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-convenios/pg-convenios.component';
import { PgDependenciaComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-dependencia/pg-dependencia.component';
import { PgDatosCoordinadorComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-datos-coordinador/pg-datos-coordinador.component';
import { PgInstitucionComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-institucion/pg-institucion.component';
import { PgAdminConveniosComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-admin-convenios/pg-admin-convenios.component';
import { AppSeguridadComponent } from './Modulos/Mod-Seguridad/app-seguridad/app-seguridad.component';
import { PgRolComponent } from './Modulos/Mod-Seguridad/pg-rol/pg-rol.component';
import { PgAccionComponent } from './Modulos/Mod-Seguridad/pg-accion/pg-accion.component';
import { PgFuncionComponent } from './Modulos/Mod-Seguridad/pg-funcion/pg-funcion.component';
import { PgPerfilComponent } from './Modulos/Mod-Seguridad/pg-perfil/pg-perfil.component';
import { PgGrupoComponent } from './Modulos/Mod-Seguridad/pg-grupo/pg-grupo.component';
import { PgAdminConveniosCoordComponent } from './Modulos/Admin-Convenios/Coordinador/pg-admin-convenios-coord/pg-admin-convenios-coord.component';
import { PgListaConveniosCoordComponent } from './Modulos/Admin-Convenios/Coordinador/pg-lista-convenios-coord/pg-lista-convenios-coord.component';
import { PgInformesComponent } from './Modulos/Admin-Convenios/Coordinador/pg-informes/pg-informes.component';
import { PgInformesConvenioComponent } from './Modulos/Admin-Convenios/Coordinador/pg-informes-convenio/pg-informes-convenio.component';
import { PgListaInformesConvenioComponent } from './Modulos/Admin-Convenios/Coordinador/pg-lista-informes-convenio/pg-lista-informes-convenio.component';
import { PgInvitadoComponent } from './Modulos/Admin-Convenios/Invitado/pg-invitado/pg-invitado.component';
import { PgConveniosInvitadoComponent } from './Modulos/Admin-Convenios/Invitado/pg-convenios-invitado/pg-convenios-invitado.component';
import { PgAuditoriaComponent } from './Modulos/Seguimiento-Convenios/Auditoria/pg-auditoria/pg-auditoria.component';
import { PgConveniosInformesComponent } from './Modulos/Seguimiento-Convenios/Auditoria/pg-convenios-informes/pg-convenios-informes.component';
import { PgSeguimientoConveniosComponent } from './Modulos/Seguimiento-Convenios/Analista-Vinculacion/pg-seguimiento-convenios/pg-seguimiento-convenios.component';
import { PgInformesEntregadosMesComponent } from './Modulos/Seguimiento-Convenios/Analista-Vinculacion/pg-informes-entregados-mes/pg-informes-entregados-mes.component';
import { PgInformesPendientesComponent } from './Modulos/Seguimiento-Convenios/Analista-Vinculacion/pg-informes-pendientes/pg-informes-pendientes.component';
import { PgInformesValidadosComponent } from './Modulos/Seguimiento-Convenios/Analista-Vinculacion/pg-informes-validados/pg-informes-validados.component';
import { PgGraficasComponent } from './Modulos/Seguimiento-Convenios/Analista-Vinculacion/pg-graficas/pg-graficas.component';
import { PgPrincipalComponent } from './pg-principal/pg-principal.component';
import { PgLoginCasComponent } from './pg-login-cas/pg-login-cas.component';
import { NgUsuarioComponent } from './Modulos/Mod-Seguridad/ng-usuario/ng-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    PgInicioComponent,
    PgHeaderComponent,
    PgFooterComponent,
    PgLineaComponent,
    PgMenuComponent,
    PgConveniosComponent,
    PgDependenciaComponent,
    PgDatosCoordinadorComponent,
    PgInstitucionComponent,
    PgAdminConveniosComponent,
    AppSeguridadComponent,
    PgRolComponent,
    PgAccionComponent,
    PgFuncionComponent,
    PgPerfilComponent,
    PgGrupoComponent,
    PgAdminConveniosCoordComponent,
    PgListaConveniosCoordComponent,
    PgInformesComponent,
    PgInformesConvenioComponent,
    PgListaInformesConvenioComponent,
    PgInvitadoComponent,
    PgConveniosInvitadoComponent,
    PgAuditoriaComponent,
    PgConveniosInformesComponent,
    PgSeguimientoConveniosComponent,
    PgInformesEntregadosMesComponent,
    PgInformesPendientesComponent,
    PgInformesValidadosComponent,
    PgGraficasComponent,
    PgPrincipalComponent,
    PgLoginCasComponent,
    NgUsuarioComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    TabViewModule,
    HttpClientModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    RatingModule,
    FormsModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule,
    CalendarModule,
    SliderModule,
		MultiSelectModule,
		ContextMenuModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    RadioButtonModule,
    InputNumberModule,
    MessagesModule,
    MessageModule,
    //ConfirmationService,
    InputTextareaModule,
    CheckboxModule,
    AutoCompleteModule,
    KnobModule,
    ChartModule,
    CheckboxModule
    
    
    




  ],
  providers: [HttpClientModule,CasClient,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
