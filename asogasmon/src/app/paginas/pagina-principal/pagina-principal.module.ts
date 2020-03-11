import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { SlideImagenesPrincipalComponent } from './pagina-principal/componentes/slide-imagenes-principal/slide-imagenes-principal.component';
import { SlideOfertasDestacadasComponent } from './pagina-principal/componentes/slide-ofertas-destacadas/slide-ofertas-destacadas.component';
import { OfertasComponent } from './pagina-principal/componentes/ofertas/ofertas.component';
import { HaztePremiumComponent } from './pagina-principal/componentes/hazte-premium/hazte-premium.component';
import { CategoriasComponent } from './pagina-principal/componentes/categorias/categorias.component';



@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    SlideImagenesPrincipalComponent,
    SlideOfertasDestacadasComponent,
    OfertasComponent,
    HaztePremiumComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule,
    FormsModule,
    NgbPaginationModule
  ]
})
export class PaginaPrincipalModule { }
