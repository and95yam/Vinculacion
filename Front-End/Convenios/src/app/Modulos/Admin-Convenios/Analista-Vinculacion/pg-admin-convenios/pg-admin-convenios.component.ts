import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { NgModel } from '@angular/forms';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { IConvenioTabla } from '../../Clases/cConvenio/i-convenio';


@Component({
  selector: 'app-pg-admin-convenios',
  templateUrl: './pg-admin-convenios.component.html',
  styleUrls: ['./pg-admin-convenios.component.css'],
  providers:[MessageService]
})
export class PgAdminConveniosComponent {

  mesaje:MensajesConvenios= new MensajesConvenios;


  loading: boolean = true;
  submitted!: boolean;
  readonlyMode:boolean= false;
  tablaConvenios!:IConvenioTabla[];
  nuevoModal:boolean=false;
  titulo: string ="";
  nombre: string="";

  //Pendientes poner los txt de datos a ingresar//

  constructor(
    private convenioTablaService:SConvenioService,
    private messageService:MessageService,
    private changeDetectorRef:ChangeDetectorRef
  ){}

    ngOnInit(){
      this.listarTablaConvenios();
    }

    listarTablaConvenios(){
      this.convenioTablaService.getConvenioTabla().subscribe(
        convenioTbl=>{
          this.tablaConvenios=convenioTbl;

        }
      );

    }
}
