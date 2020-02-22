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

import { CoreModule } from './core/core.module';
import { CurrencyPipe } from '@angular/common'


//folder componentes

import { PublicarPensionComponent } from './paginas/publicar-pension/publicar-pension.component';


//providers
import { UbicacioMapaFiltrosService } from './servicios/ubicacio-mapa-filtros.service';
import { UsuarioService } from './servicios/usuario.service';
import { ResetPasswordComponent } from './paginas/resetPassword/reset-password/reset-password.component';
import { OfertaCasaAptoService } from './servicios/ofertasCasasAptos/oferta-casa-apto.service';
import { ServiciosEspecificosService } from './servicios/serviciosEspecificos/servicios-especificos.service';
import { NormasCasaService } from './servicios/nomasCasa/normas-casa.service';
import { OfertaHabitacionService } from './servicios/ofertasHabitaciones/oferta-habitacion.service';
import { OfertasPensionService } from './servicios/ofertasPensiones/ofertas-pension.service';
import { OfertasInmueblesService } from './servicios/ofertasInmuebles/ofertas-inmuebles.service';

import { CompartidosModule } from './compartidos/compartidos.module';


@NgModule({
  declarations: [
    AppComponent,
    
    PublicarPensionComponent,
    ResetPasswordComponent,

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
    CoreModule,
    CompartidosModule//este modulo esta importando temporalmente.
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
