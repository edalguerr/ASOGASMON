import { Component, OnInit } from '@angular/core';
import { OfertaDetalladaActualService } from 'src/app/servicios/ofertaDetalladaActual/oferta-detallada-actual.service';

@Component({
  selector: 'app-carousel-full-screen',
  templateUrl: './carousel-full-screen.component.html',
  styleUrls: ['./carousel-full-screen.component.css']
})
export class CarouselFullScreenComponent implements OnInit {

  API_URL = "http://localhost/asogasmonAPI/public/img/";
  
  constructor(
    public ofertaDetalladaActualService:OfertaDetalladaActualService,
  ) { }

  ngOnInit() {
  }

}
