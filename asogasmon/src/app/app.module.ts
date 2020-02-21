import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { HttpClientModule } from '@angular/common/http';
import { CompartidosModule } from './compartidos/compartidos.module';

import { CurrencyPipe } from '@angular/common'


//folder componentes
import { OfertasRecomendadasComponent } from './componentes/ofertas-recomendadas/ofertas-recomendadas.component';
import { SlideOfertaDetalladaComponent } from './componentes/slide-oferta-detallada/slide-oferta-detallada.component';
import { InformacionDetalladaComponent } from './componentes/informacion-detallada/informacion-detallada.component';
import { MapaEstaticoComponent } from './componentes/mapa-estatico/mapa-estatico.component';
import { ListaServiciosComponent } from './componentes/lista-servicios/lista-servicios.component';
import { CompartirOfertaComponent } from './componentes/compartir-oferta/compartir-oferta.component';
import { CarouselFullScreenComponent } from './componentes/carousel-full-screen/carousel-full-screen.component';
import { ContactarOfertaDetalladaComponent } from './componentes/contactar-oferta-detallada/contactar-oferta-detallada.component';
import { FiltrosPensionAptoComponent } from './componentes/filtros-pension-apto/filtros-pension-apto.component';
import { OfertasPensionAptoComponent } from './componentes/ofertas-pension-apto/ofertas-pension-apto.component';
import { MapaComponent } from './componentes/mapa/mapa.component';


import { MiPerfilComponent } from './paginas/mi-perfil/mi-perfil.component';
import { PublicarPensionComponent } from './paginas/publicar-pension/publicar-pension.component';
import { PublicarCasaAptoComponent } from './paginas/publicar-casa-apto/publicar-casa-apto.component';
import { PublicarHabitacionComponent } from './paginas/publicar-habitacion/publicar-habitacion.component';
import { ModificarContraseniaComponent } from './componentes/modificar-contrasenia/modificar-contrasenia.component';
import { EditarDatosBasicosComponent } from './componentes/editar-datos-basicos/editar-datos-basicos.component';
import { ContactarMobileComponent } from './componentes/contactar-mobile/contactar-mobile.component';

//folder paginas
import { PensionAptoComponent } from './paginas/pension-apto/pension-apto.component';
import { OfertaDetalladaComponent } from './paginas/oferta-detallada/oferta-detallada.component';

//providers
import { UbicacioMapaFiltrosService } from './servicios/ubicacio-mapa-filtros.service';
import { UsuarioService } from './servicios/usuario.service';
import { ResetPasswordComponent } from './paginas/resetPassword/reset-password/reset-password.component';
import { MensajePublicacionComponent } from './componentes/mensaje-publicacion/mensaje-publicacion.component';
import { OfertaCasaAptoService } from './servicios/ofertasCasasAptos/oferta-casa-apto.service';
import { ServiciosEspecificosService } from './servicios/serviciosEspecificos/servicios-especificos.service';
import { NormasCasaService } from './servicios/nomasCasa/normas-casa.service';
import { OfertaHabitacionService } from './servicios/ofertasHabitaciones/oferta-habitacion.service';
import { OfertasPensionService } from './servicios/ofertasPensiones/ofertas-pension.service';
import { OfertasInmueblesService } from './servicios/ofertasInmuebles/ofertas-inmuebles.service';


@NgModule({
  declarations: [
    AppComponent,
    OfertasRecomendadasComponent,
    PensionAptoComponent,
    FiltrosPensionAptoComponent,
    OfertasPensionAptoComponent,
    MapaComponent,
    OfertaDetalladaComponent,
    SlideOfertaDetalladaComponent,
    InformacionDetalladaComponent,
    MapaEstaticoComponent,
    ListaServiciosComponent,
    CompartirOfertaComponent,
    CarouselFullScreenComponent,
    ContactarOfertaDetalladaComponent,
    MiPerfilComponent,
    PublicarPensionComponent,
    PublicarCasaAptoComponent,
    PublicarHabitacionComponent,
    ModificarContraseniaComponent,
    EditarDatosBasicosComponent,
    ContactarMobileComponent,
    ResetPasswordComponent,
    MensajePublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAX4J5NJdxvo9Jm5sP_C--t98njBVFP__s',
      libraries: ['places']
    }),
    AgmJsMarkerClustererModule,
    HttpClientModule,
    NgbPaginationModule,
    CompartidosModule
  ],
  providers: [
    UbicacioMapaFiltrosService,
    UsuarioService,
    OfertaCasaAptoService,
    OfertaHabitacionService,
    OfertasPensionService,
    ServiciosEspecificosService,
    NormasCasaService,
    OfertasInmueblesService,
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
