import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="overlay" *ngIf="isLoading$|async">
    <div class="container-fluid">
      <div class="row text-center">
        <div class="col-12">
          <img src="../../../assets/imagenes/gif-dtic.gif">
        </div>
      </div>
    </div>
  </div><div class="overlay" *ngIf="isLoadingSS$|async">
    <div class="container-fluid">
      <div class="row text-center">
        <div class="col-12">
          <img src="../../../assets/imagenes/gif-dtic.gif" alt="">
          <div class="mensaje">ERROR EN EL SERVICIO, POR FAVOR VUELVA A INTENTARLO</div>
          <button (click)="actualizar()" class="btnActualizar">ACTUALIZAR</button>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isLoading$=this.SpinnerService.isLoading$;
  isLoadingSS$=this.SpinnerService.isLoadingSS$;

  constructor(private SpinnerService: SpinnerService) {}

  ngOnInit(): void {}

  actualizar(){
    window.location.reload();
  }
}
