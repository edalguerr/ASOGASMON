import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-ofertas-destacadas',
  templateUrl: './slide-ofertas-destacadas.component.html',
  styleUrls: ['./slide-ofertas-destacadas.component.css']
})
export class SlideOfertasDestacadasComponent implements OnInit {
  
  claseTamColumna = 'col-3';
  idCarousel = 'carouselOfertasDestacadas'; 

  claseContainer = 'container';
  miniSmartphoneViewport = false;
  mostrar3Columnas = false;

  width = window.innerWidth; // ancho del navegador
  widthMobile = 992;
  widthMobileMiniSmartphone = 380;//420
  widthMobileSmartphoneContainer = 768;

  precioTest = 45000090;

  ruta = 'assets/';
  imagenes:Array<string> = ['B7111-BL_BATA_UPC_ml.jpg','libro-de-oro-de-matemticas-1-638.jpg',
  'habitacion-arriendo_2.jpg', '1024o.jpg'  
 ];

  imagenes2:Array<string> = ['3837.jpg','179809-OWKTX6-319.jpg','12324.jpg','342462-PA9Q6O-452.jpg'];

  constructor() { 
    
    /*Para tablets grandes */
    if(this.width < this.widthMobile){
      this.mostrar3Columnas = true;
      this.claseTamColumna = 'col-4';
    }

    /*Para tablets */
    if(this.width < this.widthMobileSmartphoneContainer){
      this.claseContainer = 'container-fluid';
    }

    /*Para los celulares mas pequeños(maximo 380 px)*/
    if(this.width <= this.widthMobileMiniSmartphone){
      this.miniSmartphoneViewport = true;
      this.claseTamColumna = 'col-6';
    } 

    
  }

  ngOnInit() {
    
  
  }

}
