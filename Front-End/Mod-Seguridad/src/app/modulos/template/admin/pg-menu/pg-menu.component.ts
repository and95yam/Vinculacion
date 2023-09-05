import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { MenuItem } from 'primeng-lts/api';
import { SessionUsuarioService } from 'src/app/herramientas/cas/session-usuario.service';
import { Sesion } from 'src/app/shared/interfaces/Seguridad';

@Component({
  selector: 'app-pg-menu',
  templateUrl: './pg-menu.component.html',
  styleUrls: ['./pg-menu.component.css'],
})
export class PgMenuComponent implements OnChanges {
  @Input() isShow?: boolean;
  @Input() rolActivo: any;
  @Output() onShowSidebar: EventEmitter<boolean> = new EventEmitter();
  items: MenuItem[] = [];
  display: any = 1;

  imgToggle: string = './../../../../../assets/imagenes/transfer-black.svg';

  isShowMenu: boolean = false;
  perfil: any;
  _sesion: Sesion | undefined;
  lstMenu: any[] = [];
  lstMenuItem: any[] = [];

  constructor(private session: SessionUsuarioService) { }

  async ngOnChanges(changes: SimpleChanges) {
     this._sesion = await this.session.ObtenerDatosSesion();
     if (!this._sesion || !this._sesion.idRolSeccionado) return;
     await this.MenuUsuarios();
  }

  toggleSideBar() {
     this.isShow = !this.isShow;
     let sidebar = document.querySelector('.sidebar')!;

     sidebar.classList.toggle('close');
     this.onShowSidebar.emit(this.isShow);
  }

  MenuUsuarios() {
     if (!this._sesion || !this._sesion.idRolSeccionado) return;
     if (
        this._sesion.idRolSeccionado == 1 ||
        this._sesion.idRolSeccionado == 2
     ) {
        ///Rol Administrador
        this.lstMenu = [
           {
              padEstado: true,
              padId: 6,
              padImg: 'pi pi-user',
              padNombre: 'SEGURIDAD',
              padOrden: 1,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-user',
                    padNombre: 'Usuarios',
                    padOrden: 9,
                    padUrl: '/template/seguridad/principalseguridad',
                 },
              ],
           },
           {
              padEstado: true,
              padId: 5,
              padImg: 'pi pi-cog',
              padNombre: 'CONFIGURACIONES',
              padOrden: 2,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-cog',
                    padNombre: 'Periodo',
                    padOrden: 9,
                    padUrl: '/template/configuracion/configPeriodo',
                 },
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-cog',
                    padNombre: 'Configuraciones',
                    padOrden: 9,
                    padUrl: '/template/configuracion/configPrincipal',
                 },
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-cog',
                    padNombre: 'Asignación ubicaciones',
                    padOrden: 9,
                    padUrl: '/template/configuracion/configAsignacionUbicacion',
                 },
              ],
           },
           {
              padEstado: true,
              padId: 1,
              padImg: 'pi pi-bars',
              padNombre: 'REPORTES',
              padOrden: 3,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-chart-bar',
                    padNombre: 'Postulaciones',
                    padOrden: 9,
                    padUrl: '/template/reportes/principalreportes',
                 }
              ],
           },
           {
              padEstado: true,
              padId: 8,
              padImg: 'pi pi-file-o',
              padNombre: 'RESOLUCIÓN',
              padOrden: 4,
              padUrl: '/resolucion',
           }
        ];
     }
     if (this._sesion.idRolSeccionado == 3) {
        //Rol Aspitante
        this.lstMenu = [
           {
              padEstado: true,
              padId: 1,
              padImg: 'pi pi-file-o',
              padNombre: 'POSTULACIÓN',
              padOrden: 3,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-file-o',
                    padNombre: 'Postular',
                    padOrden: 9,
                    // padUrl: '/template/postulante/seleccionPostulaciones',
                    padUrl: '/template/postulante/postulacion_inicio',
                 },
              ],
           },
           {
              padEstado: true,
              padId: 1,
              padImg: 'pi pi-file-o',
              padNombre: 'INSCRIPCIÓN',
              padOrden: 3,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-file-o',
                    padNombre: 'Registrar',
                    padOrden: 9,
                    padUrl: '/template/postulante/principalinscripcion/perfil',
                 },
              ],
           },
           {
              padEstado: true,
              padId: 1,
              padImg: 'pi pi-user',
              padNombre: 'PERFIL',
              padOrden: 3,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-user',
                    padNombre: 'Perfil',
                    padOrden: 9,
                    padUrl: '/template/postulante/perfil-postulante',
                 },
              ],
           },

           {
              padEstado: true,
              padId: 5,
              padImg: 'pi pi-list',
              padNombre: 'HISTORIAL',
              padOrden: 2,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-list',
                    padNombre: 'Inscripción',
                    padOrden: 9,
                    padUrl: '/template/postulante/histotialInscripciones',
                 },
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-list',
                    padNombre: 'Postulación',
                    padOrden: 10,
                    padUrl: '/template/postulante/Postulacion',
                 }
              ],
           },
        ];
     }
     if (this._sesion.idRolSeccionado == 6) {
        //Rol Coordinador Adminisiones
        this.lstMenu = [
           {
              padEstado: true,
              padId: 5,
              padImg: 'pi pi-cog',
              padNombre: 'CONFIGURACIONES',
              padOrden: 2,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-cog',
                    padNombre: 'Periodo',
                    padOrden: 9,
                    padUrl: '/template/configuracion/configPeriodo',
                 },
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-cog',
                    padNombre: 'Configuraciones',
                    padOrden: 9,
                    padUrl: '/template/configuracion/configPrincipal',
                 },
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-cog',
                    padNombre: 'Asignación ubicaciones',
                    padOrden: 9,
                    padUrl: '/template/configuracion/configAsignacionUbicacion',
                 },
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-cog',
                    padNombre: 'Configuraciones Evaluación',
                    padOrden: 9,
                    padUrl: '/template/configuracioneval/configPrincipal',
                 },
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-chart-bar',
                    padNombre: 'Migración de Notas',
                    padOrden: 9,
                    padUrl: '/template/reportes/reporte_evaluacion',
                 }
              ],
           },
           {
              padEstado: true,
              padId: 6,
              padImg: 'pi pi-book',
              padNombre: 'CERTIFICADOS',
              padOrden: 3,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 10,
                    padImg: 'pi pi-list',
                    padNombre: 'Certificados NO Generados',
                    padOrden: 9,
                    padUrl: '/template/certificado/certificados-nogenerado',
                 },
              ],
           },
           {
              padEstado: true,
              padId: 1,
              padImg: 'pi pi-bars',
              padNombre: 'REPORTES',
              padOrden: 3,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-chart-bar',
                    padNombre: 'Inscripción',
                    padOrden: 9,
                    padUrl: '/template/reportes/reporte_inscripciones',
                 },
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-chart-bar',
                    padNombre: 'Reportes Evaluación',
                    padOrden: 9,
                    padUrl: '/template/reportes/reporte_evaluacion_pdf',
                 }
              ],
           }
        ];
     }
     if (this._sesion.idRolSeccionado == 16) {
        //Rol Director
        this.lstMenu = [
           {
              padEstado: true,
              padId: 6,
              padImg: 'pi pi-book',
              padNombre: 'CERTIFICADOS',
              padOrden: 3,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 10,
                    padImg: 'pi pi-list',
                    padNombre: 'Listado Certificados',
                    padOrden: 9,
                    padUrl: '/template/certificado/certificados',
                 },
                 {
                    padEstado: true,
                    padId: 10,
                    padImg: 'pi pi-list',
                    padNombre: 'Certificados NO Generados',
                    padOrden: 9,
                    padUrl: '/template/certificado/certificados-nogenerado',
                 },
              ],
           },
           {
              padEstado: true,
              padId: 1,
              padImg: 'pi pi-bars',
              padNombre: 'REPORTES',
              padOrden: 3,
              menPadId: [
                 {
                    padEstado: true,
                    padId: 9,
                    padImg: 'pi pi-chart-bar',
                    padNombre: 'Inscripción',
                    padOrden: 9,
                    padUrl: '/template/reportes/reporte_inscripciones',
                 }
              ],
           },
        ];
     }
  }
  redirectHome() {
     // this.router.navigate([`/${RutaGeneral.ROOT}`]);
  }

  expandir(e: any) {
     let arrowParent = e.target.parentElement.parentElement;
     arrowParent.classList.toggle('showMenu');
     this.getLstMenuItems();
  }

  //Submenus
  getLstMenuItems() {
     this.lstMenuItem = this.lstMenuItem.filter(
        (men) =>
           men.menPerfId?.perfId === this.perfil?.perfId && men.menEstado === true
     );
     if (this.lstMenuItem.length === 0) return;
  }

  redirectSubMenu(men: any) { }

}
