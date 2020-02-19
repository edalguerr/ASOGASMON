import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContenedorComponent } from './contenedor/contenedor.component';
import { ContenidoPrincipalComponent } from './contenedor/contenido-principal/contenido-principal.component';
import { BarraNavegacionComponent } from './contenedor/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './contenedor/pie-pagina/pie-pagina.component';



@NgModule({
  declarations: [
    ContenedorComponent,
    ContenidoPrincipalComponent,
    BarraNavegacionComponent,
    PiePaginaComponent
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
