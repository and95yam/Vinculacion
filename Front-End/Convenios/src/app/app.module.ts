import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';




import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';//

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




import { PgConveniosComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-convenios/pg-convenios.component';
import { PgDependenciaComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-dependencia/pg-dependencia.component';
import { PgDatosCoordinadorComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-datos-coordinador/pg-datos-coordinador.component';
import { PgInstitucionComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-institucion/pg-institucion.component';

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
    PgInstitucionComponent

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
    InputTextareaModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
