import { Component, OnInit } from '@angular/core';
import { OfertaDetalladaActualService } from 'src/app/servicios/ofertaDetalladaActual/oferta-detallada-actual.service';

@Component({
  selector: 'app-slide-oferta-detallada',
  templateUrl: './slide-oferta-detallada.component.html',
  styleUrls: ['./slide-oferta-detallada.component.css']
})
export class SlideOfertaDetalladaComponent implements OnInit {
 
 API_URL = "http://localhost/asogasmonAPI/public/img/";

  constructor(
    public ofertaDetalladaActualService:OfertaDetalladaActualService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);   
  }

  
  actualizarImagen(imagen){
    this.ofertaDetalladaActualService.imgPrincipalActual = imagen.FOTO;
  }

}
