import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng-lts/api';


@Component({
  selector: 'app-pg-principal-seguridad',
  templateUrl: './pg-principal-seguridad.component.html',
  styleUrls: ['./pg-principal-seguridad.component.css'],
})
export class PgPrincipalSeguridadComponent implements OnInit {
 

  public items: MenuItem[]=[];
  public activeItem: MenuItem={};
  public home: MenuItem={};
  public index:number=0;
 
  constructor() { }

  ngOnInit(): void {
    this.index=0;
    this.items = [
      {label: 'Seguridad'},
      {label: 'Usuarios'}
    ];
    this.activeItem = this.items[0];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  cambiarSelector(e:any){
    this.index=e.index;
  }
}
