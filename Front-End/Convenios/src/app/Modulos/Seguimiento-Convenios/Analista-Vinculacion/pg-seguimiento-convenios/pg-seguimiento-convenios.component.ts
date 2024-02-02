import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-pg-seguimiento-convenios',
  templateUrl: './pg-seguimiento-convenios.component.html',
  styleUrls: ['./pg-seguimiento-convenios.component.css']
})
export class PgSeguimientoConveniosComponent {

  public items:MenuItem[]=[];

  public activeItem: MenuItem={};
  public home: MenuItem={};
  public  index:number=0;


  
   constructor(){}

  ngOnInit():void{
    this.index=0;
    this.items=[
     
      {label:"Informes Entregados"},
      {label:"Informes pendientes"},
      {label:"informes validados"}

    ];
  
    this.activeItem = this.items[0];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  cambiarSelector(e:any){
    this.index=e.index;
  }
}
