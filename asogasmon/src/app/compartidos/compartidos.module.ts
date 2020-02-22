import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import { InicioSesionComponent } from '../compartidos/componentes/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from '../compartidos/componentes/registrarse/registrarse.component';
import { ReestablecerContraseniaComponent } from '../compartidos/componentes/reestablecer-contrasenia/reestablecer-contrasenia.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { MapaEstaticoComponent } from './componentes/mapa-estatico/mapa-estatico.component';


@NgModule({
  declarations: [
    MapaComponent,
    MapaEstaticoComponent,
    InicioSesionComponent,
    RegistrarseComponent,
    ReestablecerContraseniaComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAX4J5NJdxvo9Jm5sP_C--t98njBVFP__s',
      libraries: ['places']
    }),
    AgmJsMarkerClustererModule,
  ],
  exports:[
    MapaComponent,
    MapaEstaticoComponent,
    InicioSesionComponent,
    RegistrarseComponent,
    ReestablecerContraseniaComponent
  ]
})
export class CompartidosModule { }
