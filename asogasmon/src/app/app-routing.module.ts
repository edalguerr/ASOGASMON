import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
  {
    path:'publicarPension', 
    loadChildren: () => import('./paginas/publicar-pension/publicar-pension.module').then(m => m.PublicarPensionModule)
  },
  {
    path:'publicarApto', 
    loadChildren: () => import('./paginas/publicar-casa-apto/publicar-casa-apto.module').then(m => m.PublicarCasaAptoModule)
  },
  {
    path:'publicarHabitacion', 
    loadChildren: () => import('./paginas/publicar-habitacion/publicar-habitacion.module').then(m => m.PublicarHabitacionModule) 
  },
  {
    path:'reset/:email/resetPass/:token', 
    loadChildren: () => import('./paginas/reset-password/reset-password.module') .then(m => m.ResetPasswordModule)
  },
  {path:'**', redirectTo:'/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


