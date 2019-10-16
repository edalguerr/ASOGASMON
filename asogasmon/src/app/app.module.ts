import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import {HttpClientModule} from '@angular/common/http';

//folder componentes
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { ReestablecerContraseniaComponent } from './componentes/reestablecer-contrasenia/reestablecer-contrasenia.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { SlideImagenesPrincipalComponent } from './componentes/slide-imagenes-principal/slide-imagenes-principal.component';
import { SlideOfertasDestacadasComponent } from './componentes/slide-ofertas-destacadas/slide-ofertas-destacadas.component';
import { OfertasComponent } from './componentes/ofertas/ofertas.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { HaztePremiumComponent } from './componentes/hazte-premium/hazte-premium.component';
import { BuscoPensionAptoComponent } from './componentes/busco-pension-apto/busco-pension-apto.component';
import { FiltrosArticulosComponent } from './componentes/filtros-articulos/filtros-articulos.component';
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
import { CategoriasComponent } from './componentes/categorias/categorias.component';

import { MiPerfilComponent } from './paginas/mi-perfil/mi-perfil.component';
import { PublicarPensionComponent } from './paginas/publicar-pension/publicar-pension.component';
import { PublicarCasaAptoComponent } from './paginas/publicar-casa-apto/publicar-casa-apto.component';
import { PublicarHabitacionComponent } from './paginas/publicar-habitacion/publicar-habitacion.component';
import { PublicarArticuloComponent } from './paginas/publicar-articulo/publicar-articulo.component';
import { SlideBuscoPensionAptoComponent } from './componentes/slide-busco-pension-apto/slide-busco-pension-apto.component';
import { ModificarContraseniaComponent } from './componentes/modificar-contrasenia/modificar-contrasenia.component';
import { EditarDatosBasicosComponent } from './componentes/editar-datos-basicos/editar-datos-basicos.component';
import { VerInfoBuscoOfertaComponent } from './componentes/ver-info-busco-oferta/ver-info-busco-oferta.component';
import { MessengerComponent } from './paginas/messenger/messenger.component';
import { ContactarMobileComponent } from './componentes/contactar-mobile/contactar-mobile.component';

//folder paginas
import { PensionAptoComponent } from './paginas/pension-apto/pension-apto.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { ArticulosComponent } from './paginas/articulos/articulos.component';
import { OfertaDetalladaComponent } from './paginas/oferta-detallada/oferta-detallada.component';

//providers
import { UbicacioMapaFiltrosService } from './servicios/ubicacio-mapa-filtros.service';
import { UsuarioService } from './servicios/usuario.service';
import { ResetPasswordComponent } from './paginas/resetPassword/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistrarseComponent,
    ReestablecerContraseniaComponent,
    PaginaPrincipalComponent,
    BarraNavegacionComponent,
    SlideImagenesPrincipalComponent,
    SlideOfertasDestacadasComponent,
    OfertasComponent,
    OfertasRecomendadasComponent,
    PiePaginaComponent,
    HaztePremiumComponent,
    BuscoPensionAptoComponent,
    FiltrosArticulosComponent,
    PensionAptoComponent,
    CategoriasComponent,
    ArticulosComponent,
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
    PublicarArticuloComponent,
    SlideBuscoPensionAptoComponent,
    ModificarContraseniaComponent,
    EditarDatosBasicosComponent,
    VerInfoBuscoOfertaComponent,
    MessengerComponent,
    ContactarMobileComponent,
    ResetPasswordComponent
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
    HttpClientModule
  ],
  providers: [
    UbicacioMapaFiltrosService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 