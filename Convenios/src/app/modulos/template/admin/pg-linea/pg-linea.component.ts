import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { ColoresService } from 'src/app/herramientas/colors/color';
import { LoaderService } from 'src/app/herramientas/loader/loader.service';
@Component({
  selector: 'app-pg-linea',
  templateUrl: './pg-linea.component.html',
  styleUrls: ['./pg-linea.component.css']
})
export class PgLineaComponent implements OnChanges {

  @Input()
  idRolSeccionado: number = 0;

  public cargando: any;
  strDatosSession: any;
  constructor(private color: ColoresService, private loading: LoaderService) {}

  cambiarColor() {
    let valor = this.color.cambiarColor("1");
    this.cargando = this.loading.isLoading.value;
    return valor;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cambiarColor();
  }
}
