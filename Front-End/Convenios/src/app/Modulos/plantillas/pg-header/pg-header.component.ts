import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CasClient } from 'src/app/AutentucacionCas/CasClient';
import { SCentralService } from '../../Mod-Seguridad/clases/cCentral/s-central.service';
import { ICentral } from '../../Mod-Seguridad/clases/cCentral/i-central';

@Component({
  selector: 'app-pg-header',
  templateUrl: './pg-header.component.html',
  styleUrls: ['./pg-header.component.css']
})
export class PgHeaderComponent {
    items: MenuItem[] = [];
    ced:any=sessionStorage.getItem('UserCedula')
    usuario!: ICentral[];
   txtPerId!:string;
   txtcedula:string=this.ced
   txtnombres!:string;
   txtapellido1!:string;
   txtapellido2!:string;
   txtcompleto!:string

   constructor(
    private cas: CasClient,
    private DbCentral:SCentralService,
   ){}



   ngOnInit(){
    this.buscarUsuario()
   }

   logout(){
    this.cas.LogoutCas()
   }

   buscarUsuario(){
    this.DbCentral.getDatos(this.txtcedula).subscribe(
      listado=>{
        
        this.txtPerId=listado.listado[0].per_id
       
        this.txtnombres=listado.listado[0].per_nombres
        this.txtapellido1=listado.listado[0].per_primerApellido
        this.txtapellido2=listado.listado[0].per_segundoApellido
        this.txtcedula=listado.listado[0].pid_valor
        this.txtcompleto=(this.txtnombres+' '+this.txtapellido1+' '+this.txtapellido2)
      }
     
    );
    
  }
  

}
