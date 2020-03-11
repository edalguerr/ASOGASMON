import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { CurrencyPipe } from '@angular/common'
import { AppComponent } from './app.component';

//providers
import { UbicacioMapaFiltrosService } from './servicios/ubicacio-mapa-filtros.service';
import { UsuarioService } from './servicios/usuario.service';
import { OfertaCasaAptoService } from './servicios/ofertasCasasAptos/oferta-casa-apto.service';
import { ServiciosEspecificosService } from './servicios/serviciosEspecificos/servicios-especificos.service';
import { NormasCasaService } from './servicios/nomasCasa/normas-casa.service';
import { OfertaHabitacionService } from './servicios/ofertasHabitaciones/oferta-habitacion.service';
import { OfertasPensionService } from './servicios/ofertasPensiones/ofertas-pension.service';
import { OfertasInmueblesService } from './servicios/ofertasInmuebles/ofertas-inmuebles.service';
import { OfertasDestacadasService } from './servicios/ofertasDestacadas/ofertas-destacadas.service';
import { UltimasOfertasService } from './servicios/ultimasOfertas/ultimas-ofertas.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
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
    CurrencyPipe,
    OfertasDestacadasService,
    UltimasOfertasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
