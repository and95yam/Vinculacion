import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-pg-invitado',
  templateUrl: './pg-invitado.component.html',
  styleUrls: ['./pg-invitado.component.css']
})
export class PgInvitadoComponent {

  public items:MenuItem[]=[];

  public activeItem: MenuItem={};
  public home: MenuItem={};
  public  index:number=0;
  
   constructor(){}

  ngOnInit():void{
    this.index=0;
    this.items=[
     
      {label:"Convenio"}

    ];
  
    this.activeItem = this.items[0];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  cambiarSelector(e:any){
    this.index=e.index;
  }
}
