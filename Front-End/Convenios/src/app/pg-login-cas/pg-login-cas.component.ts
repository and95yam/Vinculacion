import { Component } from '@angular/core';
import { CasClient } from '../AutentucacionCas/CasClient';


@Component({
  selector: 'app-pg-login-cas',
  templateUrl: './pg-login-cas.component.html',
  styleUrls: ['./pg-login-cas.component.css'],
  
})
export class PgLoginCasComponent {

  constructor(
    private casclient: CasClient

  ){}
  async ngOnInit() {

    console.log('pasa por aqui')
    if (!this.casclient.getLogin()) {
      console.log('Estoy sin Login');
      this.casclient.saveTicket();
      await this.casclient.verificaLogin().then();
    }
    if (this.casclient.isAuthenticated() && this.casclient.getLogin()) {
      //await this.session.InicioSesion();
    }
  }
}
