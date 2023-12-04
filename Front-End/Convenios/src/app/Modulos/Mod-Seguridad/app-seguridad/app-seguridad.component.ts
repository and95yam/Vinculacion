import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-app-seguridad',
  templateUrl: './app-seguridad.component.html',
  styleUrls: ['./app-seguridad.component.css']
})
export class AppSeguridadComponent {
  public items:MenuItem[]=[];

  public activeItem: MenuItem={};
  public home: MenuItem={};
  public  index:number=0;

   constructor(){}

  ngOnInit():void{
    this.index=0;
    this.items=[
      {label:"Roles"},
      {label:"Acción"},
      {label:"Función"},
      {label:"Perfil"},
      {label:"Grupo"}

    ];

    this.activeItem = this.items[0];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  cambiarSelector(e:any){
    this.index=e.index;
  }
}
