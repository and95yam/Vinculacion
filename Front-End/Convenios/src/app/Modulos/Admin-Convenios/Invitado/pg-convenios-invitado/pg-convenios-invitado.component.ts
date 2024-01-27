import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pg-convenios-invitado',
  templateUrl: './pg-convenios-invitado.component.html',
  styleUrls: ['./pg-convenios-invitado.component.css']
})
export class PgConveniosInvitadoComponent {
  public items:MenuItem[]=[];
  public activeItem:MenuItem={};
  public home: MenuItem={};
  public index:number=0;

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
