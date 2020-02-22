import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PensionAptoComponent } from './paginas/pension-apto/pension-apto/pension-apto.component';
import { PublicarPensionComponent } from './paginas/publicar-pension/publicar-pension.component';
import { PublicarCasaAptoComponent } from './paginas/publicar-casa-apto/publicar-casa-apto.component';
import { PublicarHabitacionComponent } from './paginas/publicar-habitacion/publicar-habitacion.component';
import { ResetPasswordComponent } from './paginas/resetPassword/reset-password/reset-password.component';
 

const routes: Routes = [
  {
    path:'', 
    loadChildren: () => import('./paginas/pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalModule)
  },
  {
    path:'pensiones', 
    loadChildren: () => import('./paginas/pension-apto/pension-apto.module').then(m => m.PensionAptoModule)
  },
  {
    path:'apartamentos', 
    loadChildren: () => import('./paginas/pension-apto/pension-apto.module').then(m => m.PensionAptoModule)
  },
  {
    path:'habitaciones', 
    loadChildren: () => import('./paginas/pension-apto/pension-apto.module').then(m => m.PensionAptoModule)
  },
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
  {
    path:'perfil/:usuario', 
    loadChildren: () => import ('./paginas/mi-perfil/mi-perfil.module').then( m => m.MiPerfilModule)
  },
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


