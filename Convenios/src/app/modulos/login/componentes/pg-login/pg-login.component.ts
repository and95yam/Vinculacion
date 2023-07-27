import { Component, OnInit } from '@angular/core';
//import { SessionUsuarioService } from '../../../../herramientas/cas/session-usuario.service';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'app-pg-login',
  templateUrl: './pg-login.component.html',
  styleUrls: ['./pg-login.component.css'],
})
export class PgLoginComponent implements OnInit {
  cars: string[] = [];
  isLoading = true;

  constructor(/*private session:SessionUsuarioService*/) {}

  ngOnInit(): void {
   //this.session.VerificacionActualizacionVersion();
    setTimeout(() => {
      this.isLoading = false;
    }, 2200);

    
  }

  async IniciarIngreso(){
    
    window.open(environment.REDIRECT_URI, '_blank');
  

  }
}