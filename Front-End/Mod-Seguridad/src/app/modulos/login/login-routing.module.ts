import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Guradia, para validar existencia de sesion
import { AuthGuard } from './guards/auth.guard';

//Components
import { PgLoginComponent } from './componentes/pg-login/pg-login.component';
import { PgPuenteComponent } from './componentes/pg-puente/pg-puente.component';
import { PgBienvenidaComponent } from './componentes/pg-bienvenida/pg-bienvenida.component';

const routes: Routes = [
   {
      path: '',
      component: PgLoginComponent,
   },
   {
      path: 'cas',
      component: PgPuenteComponent,
   },
   {
      path: 'template',
      component: PgBienvenidaComponent,
      children: [
         {
            path: 'seguridad',
            loadChildren: () => import('./../seguridad/seguridad.module').then((m) => m.SeguridadModule),
            //canLoad: [AuthGuard],
         }
      ]
      //canActivate: [AuthGuard],
      //canLoad: [AuthGuard],
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class LoginRoutingModule { }
