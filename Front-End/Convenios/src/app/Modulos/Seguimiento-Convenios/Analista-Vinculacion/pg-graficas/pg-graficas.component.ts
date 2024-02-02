import { Component } from '@angular/core';
import { SConvenioService } from 'src/app/Modulos/Admin-Convenios/Clases/cConvenio/s-convenio.service';
import { IConvenio } from 'src/app/Modulos/Admin-Convenios/Clases/cConvenio/i-convenio';

@Component({
  selector: 'app-pg-graficas',
  templateUrl: './pg-graficas.component.html',
  styleUrls: ['./pg-graficas.component.css']
})
export class PgGraficasComponent {

  convenios!:IConvenio[]

  constructor(
    private convenioService:SConvenioService
  ){}
  basicData: any;

  basicOptions: any;
              
  ngOnInit() {

    this.obtenerConvenios();
    this.basicData = {
        labels: ['Marco', 'Específico'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [5,8]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#FFA726',
                data: [8,1]
            }
        ]
    };
  }

  obtenerConvenios(){
      this.convenioService.getConvenioTabla().subscribe(
        convenio=>{
          this.convenios=convenio
          console.log(convenio)
        }
      )
  }
}
