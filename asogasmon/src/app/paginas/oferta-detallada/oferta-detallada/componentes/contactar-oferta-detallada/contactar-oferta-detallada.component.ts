import { Component, OnInit } from '@angular/core';
import { OfertaDetalladaActualService } from 'src/app/servicios/ofertaDetalladaActual/oferta-detallada-actual.service';

@Component({
  selector: 'app-contactar-oferta-detallada',
  templateUrl: './contactar-oferta-detallada.component.html',
  styleUrls: ['./contactar-oferta-detallada.component.css']
})
export class ContactarOfertaDetalladaComponent implements OnInit {

  regExp = {
    celular: "\\d{10}",
  }

  maxCaracteresMensaje = 800;

  constructor(
    public ofertaDetalladaActualService:OfertaDetalladaActualService
  ) { }

  ngOnInit() {
    
  }

}
