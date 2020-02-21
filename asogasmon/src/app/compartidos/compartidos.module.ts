import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContenedorComponent } from './contenedor/contenedor.component';
import { ContenidoPrincipalComponent } from './contenedor/contenido-principal/contenido-principal.component';
import { BarraNavegacionComponent } from './contenedor/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './contenedor/pie-pagina/pie-pagina.component';
import { InicioSesionComponent } from './contenedor/barra-navegacion/componentes/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './contenedor/barra-navegacion/componentes/registrarse/registrarse.component';
import { ReestablecerContraseniaComponent } from './contenedor/barra-navegacion/componentes/reestablecer-contrasenia/reestablecer-contrasenia.component';

@NgModule({
  declarations: [
    ContenedorComponent,
    ContenidoPrincipalComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioSesionComponent,
    RegistrarseComponent,
    ReestablecerContraseniaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ContenedorComponent
  ]
})

export class CompartidosModule { }
