import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-oferta-detallada',
  templateUrl: './slide-oferta-detallada.component.html',
  styleUrls: ['./slide-oferta-detallada.component.css']
})
export class SlideOfertaDetalladaComponent implements OnInit {

  @Output() emitEvent:EventEmitter<String> = new EventEmitter<String>();

  ruta = 'assets/';
  imagenes:Array<string> = ['B7111-BL_BATA_UPC_ml.jpg','libro-de-oro-de-matemticas-1-638.jpg',
  'habitacion-arriendo_2.jpg', '1024o.jpg'  
 ];

 imagenes2:Array<string> = ['3837.jpg','179809-OWKTX6-319.jpg','12324.jpg','342462-PA9Q6O-452.jpg'];
 
  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  
  actualizarImagen(imagen){
    this.emitEvent.emit(imagen);
  }

}
