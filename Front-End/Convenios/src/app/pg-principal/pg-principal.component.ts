import { Component } from '@angular/core';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';

@Component({
  selector: 'app-pg-principal',
  templateUrl: './pg-principal.component.html',
  styleUrls: ['./pg-principal.component.css']
})
export class PgPrincipalComponent {
  
  link:DireccionesApi= new DireccionesApi;
  url=this.link.REDIRECT_URI

  async IniciarIngreso(){
  
  window.open(this.url, '_blank');
  

  }

}
