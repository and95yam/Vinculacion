import localeEs from '@angular/common/locales/es-HN';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData }  from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modulos/login/login.module';
import { HttpService } from './herramientas/cas/http.service';
import { TemplateModule } from './modulos/template/template.module';
import { HttpClientModule } from '@angular/common/http';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    //MODULOS PROPIOS
    TemplateModule,
    LoginModule,
    SeguridadModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
