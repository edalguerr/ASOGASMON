import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { PaginaPrincipalComponent} from './paginas/pagina-principal/pagina-principal.component' ;
import { ArticulosComponent } from './paginas/articulos/articulos.component';
import { PensionAptoComponent } from './paginas/pension-apto/pension-apto.component';
import { OfertaDetalladaComponent } from './paginas/oferta-detallada/oferta-detallada.component';
import { MiPerfilComponent } from './paginas/mi-perfil/mi-perfil.component';
import { PublicarPensionComponent } from './paginas/publicar-pension/publicar-pension.component';
import { PublicarCasaAptoComponent } from './paginas/publicar-casa-apto/publicar-casa-apto.component';
import { PublicarHabitacionComponent } from './paginas/publicar-habitacion/publicar-habitacion.component';
import { PublicarArticuloComponent } from './paginas/publicar-articulo/publicar-articulo.component';
import { MessengerComponent } from './paginas/messenger/messenger.component';
import { ResetPasswordComponent } from './paginas/resetPassword/reset-password/reset-password.component';
 

const routes: Routes = [
  {path:'', component: PaginaPrincipalComponent},
  {path:'articulos', component: ArticulosComponent},
  {path:'pensiones', component: PensionAptoComponent},
  {path:'apartamentos', component: PensionAptoComponent},
  {path:'habitaciones', component: PensionAptoComponent},
  {path:'oferta/:id', component: OfertaDetalladaComponent},
  {path:'ofertasCasaApto/:id', component: OfertaDetalladaComponent},
  {path:'articulos/:id', component: OfertaDetalladaComponent},
  {path:'perfil/:usuario', component: MiPerfilComponent},
  {path:'publicarPension', component: PublicarPensionComponent},
  {path:'publicarApto', component: PublicarCasaAptoComponent},
  {path:'publicarHabitacion', component: PublicarHabitacionComponent },
  {path:'publicarArticulo', component: PublicarArticuloComponent },
  {path:'perfil/:usuario/chat', component: MessengerComponent },
  {path:'reset/:email/resetPass/:token', component: ResetPasswordComponent },
  {path:'**', redirectTo:'/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


