import { Component } from '@angular/core';
import { SSeguridadService } from '../Admin-Convenios/Clases/cSeguridad/s-seguridad.service';
import { ISeguridad } from '../Admin-Convenios/Clases/cSeguridad/iseguridad';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';


@Component({
  selector: 'app-pg-inicio',
  templateUrl: './pg-inicio.component.html',
  styleUrls: ['./pg-inicio.component.css']
})
export class PgInicioComponent {

  link:DireccionesApi= new DireccionesApi;
  Perfil!:ISeguridad[]
 ced:any=sessionStorage.getItem('perid')

  constructor(
    
    private seguridadService:SSeguridadService

  ){}
  async ngOnInit() {
   
   this.getPerId()
   
   console.log('perid2' ,this.ced)
  }

  getPerId(){
    this.seguridadService.getPerfilID(this.ced).subscribe(
      PerId=> {
        this.Perfil=PerId
        if( this.Perfil.length>0){
          console.log('si tiene perfil y si llama ')

        }else{
          console.log("no tiene y si llama ")
        }
        console.log( PerId)
      }
    );
    }
}
