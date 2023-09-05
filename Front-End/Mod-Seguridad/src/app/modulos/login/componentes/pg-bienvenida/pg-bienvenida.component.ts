import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Sesion } from 'src/app/shared/interfaces/Seguridad';
import { ColoresService } from 'src/app/herramientas/colors/color';
import { SessionUsuarioService } from '../../../../herramientas/cas/session-usuario.service';

@Component({
   selector: 'app-pg-bienvenida',
   templateUrl: './pg-bienvenida.component.html',
   styleUrls: ['./pg-bienvenida.component.css'],
})
export class PgBienvenidaComponent implements OnInit, OnChanges {

   imgToggle: string = './../../../../../assets/imagenes/transfer-black.svg';
   _sesion: Sesion | undefined;
   idrol: number = 0;

   constructor(
      private color: ColoresService,
      private session: SessionUsuarioService
   ) { }

   ngOnInit(): void { }

   toggleSideBar1() {
      let sidebar = document.querySelector('.body')!;
      sidebar.classList.toggle('body');
   }

   procesaPropagar(mensaje: any) {
      if (!mensaje) {
         let sidebar = document.querySelector('.body')!;
         sidebar.classList.remove('body');
         sidebar.classList.add('body-close');
      } else {
         let sidebar = document.querySelector('.body-close')!;
         sidebar.classList.remove('body-close');
         sidebar.classList.add('body');
      }
   }

   changeSession(session: any) {
      this.idrol = session.idRolSeccionado;
      this.color.cambiarColor(this.idrol.toString());
   }

   async ngOnChanges(changes: SimpleChanges) {
      this._sesion = await this.session.ObtenerDatosSesion();
      if (!this._sesion || !this._sesion.idRolSeccionado) return;
   }
}
