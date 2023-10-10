import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';

import { AppComponent } from './app.component';
import { PgInicioComponent } from './Modulos/pg-inicio/pg-inicio.component';
import { PgHeaderComponent } from './Modulos/plantillas/pg-header/pg-header.component';
import { PgFooterComponent } from './Modulos/plantillas/pg-footer/pg-footer.component';
import { PgLineaComponent } from './Modulos/plantillas/pg-linea/pg-linea.component';
import { PgMenuComponent } from './Modulos/plantillas/pg-menu/pg-menu.component';

import { PgConveniosComponent } from './Modulos/Admin-Convenios/Analista-Vinculacion/pg-convenios/pg-convenios.component';

@NgModule({
  declarations: [
    AppComponent,
    PgInicioComponent,
    PgHeaderComponent,
    PgFooterComponent,
    PgLineaComponent,
    PgMenuComponent,
    PgConveniosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
