import { Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges } from '@angular/core';

  import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-pg-menu',
  templateUrl: './pg-menu.component.html',
  styleUrls: ['./pg-menu.component.css']
})
export class PgMenuComponent {
  @Input() isShow?: boolean;
  @Output() onShowSidebar: EventEmitter<boolean> = new EventEmitter();

  items: MenuItem[] = [];
  display: any = 1;

  imgToggle: string = '../../../../assets/imagenes/transfer-black.svg'

  

  toggleSideBar() {
    this.isShow = !this.isShow;
    let sidebar = document.querySelector('.sidebar')!;

    sidebar.classList.toggle('close');
    this.onShowSidebar.emit(this.isShow);
 }

 redirectHome() {
  // this.router.navigate([`/${RutaGeneral.ROOT}`]);
  }
 
}
