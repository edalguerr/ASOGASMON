import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PensionAptoComponent } from './paginas/pension-apto/pension-apto.component';
import { OfertaDetalladaComponent } from './paginas/oferta-detallada/oferta-detallada/oferta-detallada.component';
import { MiPerfilComponent } from './paginas/mi-perfil/mi-perfil.component';
import { PublicarPensionComponent } from './paginas/publicar-pension/publicar-pension.component';
import { PublicarCasaAptoComponent } from './paginas/publicar-casa-apto/publicar-casa-apto.component';
import { PublicarHabitacionComponent } from './paginas/publicar-habitacion/publicar-habitacion.component';
import { ResetPasswordComponent } from './paginas/resetPassword/reset-password/reset-password.component';
 

const routes: Routes = [
  {
    path:'', 
    loadChildren: () => import('./paginas/pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalModule)
  },
  {path:'pensiones', component: PensionAptoComponent},
  {path:'apartamentos', component: PensionAptoComponent},
  {path:'habitaciones', component: PensionAptoComponent},
  {
    path:'oferta/:id', 
    loadChildren: () => import('./paginas/oferta-detallada/oferta-detallada.module').then( m => m.OfertaDetalladaModule)
  },
  {
    path:'ofertasPension/:id', 
    loadChildren: () => import('./paginas/oferta-detallada/oferta-detallada.module').then( m => m.OfertaDetalladaModule)
  },
  {
    path:'ofertasHabitacion/:id', 
    loadChildren: () => import('./paginas/oferta-detallada/oferta-detallada.module').then( m => m.OfertaDetalladaModule)
  },
  {
    path:'ofertasCasaApto/:id', 
    loadChildren: () => import('./paginas/oferta-detallada/oferta-detallada.module').then( m => m.OfertaDetalladaModule)
  },
  {path:'perfil/:usuario', component: MiPerfilComponent},
  {path:'publicarPension', component: PublicarPensionComponent},
  {path:'publicarApto', component: PublicarCasaAptoComponent},
  {path:'publicarHabitacion', component: PublicarHabitacionComponent },
  {path:'reset/:email/resetPass/:token', component: ResetPasswordComponent },
  {path:'**', redirectTo:'/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


