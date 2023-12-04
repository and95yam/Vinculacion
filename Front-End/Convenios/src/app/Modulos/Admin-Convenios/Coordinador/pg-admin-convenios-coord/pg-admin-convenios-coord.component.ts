import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SCoordinadorService } from '../../Clases/cCoordinador/s-coordinador.service';
import { ICoordinador3 } from '../../Clases/cCoordinador/i-coordinador';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';//Temporal

@Component({
  selector: 'app-pg-admin-convenios-coord',
  templateUrl: './pg-admin-convenios-coord.component.html',
  styleUrls: ['./pg-admin-convenios-coord.component.css']
})
export class PgAdminConveniosCoordComponent {

  dir:DireccionesApi = new DireccionesApi
  ced:string=this.dir.cedula1

  coordinador!:ICoordinador3[];
  public items:MenuItem[]=[];
  public activeItem: MenuItem={};
  public home: MenuItem={};
  public  index:number=0;

  txtCiCoordinador:String="";
  txtNombre:String="";
  txtCorreo:String="";
  txtTelefono:String="";
  txtDependencia:String="";


   constructor(
    private coordinadorService:SCoordinadorService

    ){}

  ngOnInit():void{
    this.GetCoordinador();
    this.index=0;
    this.items=[
      {label:"Convenios"},
      {label:"Informes"},

    ];

    this.activeItem = this.items[0];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  cambiarSelector(e:any){
    this.index=e.index;
  }

  GetCoordinador(){
    this.coordinadorService.GetCordinador(this.ced).subscribe(
      (coord)=>{
        this.coordinador=coord;
        if (this.coordinador.length > 0) {
          this.txtCiCoordinador=this.coordinador[0].c_strcicoordinador
          this.txtNombre = this.coordinador[0].c_strnombrescoordinador;
          this.txtCorreo = this.coordinador[0].c_strcorreocoordinador;
          this.txtTelefono = this.coordinador[0].c_strtelefonocoordinador;
          this.txtDependencia = this.coordinador[0].c_strnombredependencia;

        }

        console.log(coord);

      }
    )
  }



}
