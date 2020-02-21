import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { MapaEstaticoComponent } from './componentes/mapa-estatico/mapa-estatico.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';



@NgModule({
  declarations: [
    MapaComponent,
    MapaEstaticoComponent
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
    MapaEstaticoComponent
  ]
})
export class CompartidosModule { }
