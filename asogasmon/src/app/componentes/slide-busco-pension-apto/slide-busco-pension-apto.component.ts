import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-busco-pension-apto',
  templateUrl: './slide-busco-pension-apto.component.html',
  styleUrls: ['./slide-busco-pension-apto.component.css']
})
export class SlideBuscoPensionAptoComponent implements OnInit {

  @Input() public claseTamColumna = 'col-4';
  @Input() public tipoInmueble = 'pension';

  ruta = 'assets/';
  imagenes:Array<string> = ['B7111-BL_BATA_UPC_ml.jpg','libro-de-oro-de-matemticas-1-638.jpg',
  'habitacion-arriendo_2.jpg', '1024o.jpg'  
 ];

  imagenes2:Array<string> = ['3837.jpg','179809-OWKTX6-319.jpg','12324.jpg','342462-PA9Q6O-452.jpg'];

  width = window.innerWidth; // ancho del navegador
  widthMobileMiniSmartphone = 450;
  menos3Columnas = false;

  precioTest = 5000000;

  constructor() { 

    if(this.width < this.widthMobileMiniSmartphone){
      this.menos3Columnas = true;
      this.claseTamColumna ='col-6 card-columnas-mobile';
    }
  }

  ngOnInit() {
  }

}
