import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
