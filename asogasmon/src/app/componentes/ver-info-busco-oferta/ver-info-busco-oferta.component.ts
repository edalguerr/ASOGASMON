import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-info-busco-oferta',
  templateUrl: './ver-info-busco-oferta.component.html',
  styleUrls: ['./ver-info-busco-oferta.component.css']
})
export class VerInfoBuscoOfertaComponent implements OnInit {

  ruta:string = "assets/"; 
  imagen = 'Mini_Protoboard_170_puntos_1.jpg';
  tipoInmueble = "Pension";

  precioTest = 3000000;
  
  constructor() { }

  ngOnInit() {
  }

}
