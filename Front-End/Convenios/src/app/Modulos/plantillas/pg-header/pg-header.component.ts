import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-pg-header',
  templateUrl: './pg-header.component.html',
  styleUrls: ['./pg-header.component.css']
})
export class PgHeaderComponent {
    items: MenuItem[] = [];
}
