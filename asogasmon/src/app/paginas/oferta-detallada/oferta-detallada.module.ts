import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaDetalladaRoutingModule } from './oferta-detallada-routing.module';
import { OfertaDetalladaComponent } from './oferta-detallada/oferta-detallada.component';
import { CompartidosModule } from 'src/app/compartidos/compartidos.module';
import { CarouselFullScreenComponent } from './oferta-detallada/componentes/carousel-full-screen/carousel-full-screen.component';
import { ContactarMobileComponent } from './oferta-detallada/componentes/contactar-mobile/contactar-mobile.component';
import { ContactarOfertaDetalladaComponent } from './oferta-detallada/componentes/contactar-oferta-detallada/contactar-oferta-detallada.component';
import { InformacionDetalladaComponent } from './oferta-detallada/componentes/informacion-detallada/informacion-detallada.component';
import { SlideOfertaDetalladaComponent } from './oferta-detallada/componentes/slide-oferta-detallada/slide-oferta-detallada.component';
import { ListaServiciosComponent } from './oferta-detallada/componentes/informacion-detallada/componentes/lista-servicios/lista-servicios.component';
import { CompartirOfertaComponent } from './oferta-detallada/componentes/informacion-detallada/componentes/compartir-oferta/compartir-oferta.component';


@NgModule({
  declarations: [
    OfertaDetalladaComponent,
    CarouselFullScreenComponent,
    ContactarMobileComponent,
    ContactarOfertaDetalladaComponent,
    InformacionDetalladaComponent,
    SlideOfertaDetalladaComponent,
    ListaServiciosComponent,
    CompartirOfertaComponent
  ],
  imports: [
    CommonModule,
    OfertaDetalladaRoutingModule,
    CompartidosModule
  ]
})
export class OfertaDetalladaModule { }
