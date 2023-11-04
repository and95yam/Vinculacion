import { Injectable } from '@angular/core';

@Injectable()

export class DireccionesApi{

  dependencia: string ="http://localhost:3001/convenio/dependencia";
  coordinador: string="http://localhost:3001/convenio/coordinador";

}
