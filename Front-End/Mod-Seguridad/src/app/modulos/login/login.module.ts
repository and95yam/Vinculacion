
import { LoginRoutingModule } from './login-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgBienvenidaComponent } from './componentes/pg-bienvenida/pg-bienvenida.component';
import { PgLoginComponent } from './componentes/pg-login/pg-login.component';
import { PgNoAutorizadoComponent } from './componentes/pg-no-autorizado/pg-no-autorizado.component';
import { PgPuenteComponent } from './componentes/pg-puente/pg-puente.component';
import { TemplateModule } from '../template/template.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from 'src/app/herramientas/Spinner/spinner.interceptor';
@NgModule({
  declarations: [PgBienvenidaComponent, PgLoginComponent, PgNoAutorizadoComponent, PgPuenteComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TemplateModule
  ],
  schemas: [
     CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}]
})
export class LoginModule { }
