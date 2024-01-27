import { Component } from '@angular/core';
import { IConvenio} from '../../Clases/cConvenio/i-convenio';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';

@Component({
  selector: 'app-pg-lista-convenios-invitado',
  templateUrl: './pg-lista-convenios-invitado.component.html',
  styleUrls: ['./pg-lista-convenios-invitado.component.css']
})
export class PgListaConveniosInvitadoComponent {

  constructor(private convenioService:SConvenioService ){}

  ngOnInit(){

  }

  
}
