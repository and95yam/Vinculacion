import { Injectable } from '@angular/core';
import { SessionUsuarioService } from '../cas/session-usuario.service';

@Injectable({
  providedIn: 'root',
})
export class ColoresService {
  constructor(private session: SessionUsuarioService) {}
  public level = [
    '#d31a2b',
    '#d31a2b',
    '#39923b',
    '#3399cc',
    '#dcad2a',
    '#304a54',
    '#999999',
  ];

  cambiarColor(rol: string) {
    let position = rol;
    let valor = this.level[parseInt(position ? position : '0')];
    return valor;
  }
}
