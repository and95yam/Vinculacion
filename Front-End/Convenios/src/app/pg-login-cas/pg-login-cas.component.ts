import { Component } from '@angular/core';
import { CasClient } from '../AutentucacionCas/CasClient';
import { SSeguridadService } from '../Modulos/Admin-Convenios/Clases/cSeguridad/s-seguridad.service'; 
import { ISeguridad } from '../Modulos/Admin-Convenios/Clases/cSeguridad/iseguridad';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';




@Component({
  selector: 'app-pg-login-cas',
  templateUrl: './pg-login-cas.component.html',
  styleUrls: ['./pg-login-cas.component.css'],
  
})
export class PgLoginCasComponent {

  link:DireccionesApi= new DireccionesApi;
  url=this.link.PaginaInicio
  Perfil!:ISeguridad[]
  ced:any=sessionStorage.getItem('perid')
  autorizado:boolean=false;
  texto:string="";
 
  constructor(
    private casclient: CasClient,
    private seguridadService:SSeguridadService,
  

  ){}
  async ngOnInit() {
   
    console.log('perid loginCas' ,this.ced)

    
    
    console.log('pasa por aqui')
    
    if (!this.casclient.getLogin()) {
      console.log('Estoy sin Login');
      this.casclient.saveTicket();
      await this.casclient.verificaLogin().then();
      this.ced=sessionStorage.getItem('perid')
    }
    if (this.casclient.isAuthenticated() && this.casclient.getLogin()) {
      //await this.session.InicioSesion();
      
    }
    this.getPerId()
  }
  getPerId(){

    this.seguridadService.getPerfilID(this.ced).subscribe(
      PerId=> {
        this.Perfil=PerId
        if( this.Perfil.length>0){
          this.autorizado=true;
          console.log('si tiene perfil')
          this.texto="";
          window.open(this.url, '_blank')
         // window.close();
        }else{
          this.autorizado=false;
          this.texto="Usuario No Autorizado, Comuníquese con el Administrador"
          console.log("no tiene")
          
        }
        console.log( PerId)
      }
    );
    }

    
}
