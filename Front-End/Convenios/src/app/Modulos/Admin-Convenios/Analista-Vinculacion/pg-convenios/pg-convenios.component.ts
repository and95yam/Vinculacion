import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pg-convenios',
  templateUrl: './pg-convenios.component.html',
  styleUrls: ['./pg-convenios.component.css']
})
export class PgConveniosComponent {
  public items:MenuItem[]=[];

  public activeItem: MenuItem={};
  public home: MenuItem={};
  public  index:number=0;
  
   constructor(){}

  ngOnInit():void{
    this.index=0;
    this.items=[
      {label:"Dependencia"},
      {label:"Coordinador"},
      {label:"Institucion"},
      {label:"Convenio"}

    ];
  
    this.activeItem = this.items[0];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  cambiarSelector(e:any){
    this.index=e.index;
  }
}
