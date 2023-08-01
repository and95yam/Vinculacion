import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgLineaLoginComponent } from './admin/pg-linea-login/pg-linea-login.component';
import { PgMenuComponent } from './admin/pg-menu/pg-menu.component';
import { PgLineaComponent } from './admin/pg-linea/pg-linea.component';
import { PgHeaderComponent } from './admin/pg-header/pg-header.component';
import { PgFooterComponent } from './admin/pg-footer/pg-footer.component';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';


@NgModule({
  declarations: [PgLineaLoginComponent, PgMenuComponent, PgLineaComponent, PgHeaderComponent, PgFooterComponent],
  imports: [
    CommonModule,PrimeNgModule
  ],
  exports: [
    PgHeaderComponent,
    PgFooterComponent,
    PgMenuComponent,
    PgLineaLoginComponent
 ],schemas: [
  CUSTOM_ELEMENTS_SCHEMA
]
})
export class TemplateModule { }
