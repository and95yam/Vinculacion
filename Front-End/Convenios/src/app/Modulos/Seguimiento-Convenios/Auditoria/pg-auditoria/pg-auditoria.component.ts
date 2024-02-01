import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-pg-auditoria',
  templateUrl: './pg-auditoria.component.html',
  styleUrls: ['./pg-auditoria.component.css']
})
export class PgAuditoriaComponent {

  public items:MenuItem[]=[];

  public activeItem: MenuItem={};
  public home: MenuItem={};
  public  index:number=0;

  
  
   constructor(){}

   ngOnInit():void{
    this.index=0;
    this.items=[
     
      {label:"Convenios"}

    ];
  
    this.activeItem = this.items[0];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  cambiarSelector(e:any){
    this.index=e.index;
  }
}
