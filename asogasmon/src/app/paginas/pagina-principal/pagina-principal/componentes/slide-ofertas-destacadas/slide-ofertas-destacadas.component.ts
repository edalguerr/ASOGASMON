import { Component, OnInit } from '@angular/core';
import { OfertasDestacadasService } from 'src/app/servicios/ofertasDestacadas/ofertas-destacadas.service';
import { DatosBusquedaInmuebles } from 'src/app/core/interfaces/datos-busqueda-inmuebles';

@Component({
  selector: 'app-slide-ofertas-destacadas',
  templateUrl: './slide-ofertas-destacadas.component.html',
  styleUrls: ['./slide-ofertas-destacadas.component.css']
})
export class SlideOfertasDestacadasComponent implements OnInit {
  
  claseTamColumna = 'col-3';
  idCarousel = 'carouselOfertasDestacadas'; 

  claseContainer = 'container';
  
  width = window.innerWidth; // ancho del navegador
  widthMobile = 992;
  widthMobileMiniSmartphone = 380;//420
  widthMobileSmartphoneContainer = 768;

  
  datosBusqueda: DatosBusquedaInmuebles = {
    cantOfertasPorPagina: 8,
    paginacionActual: 3,
    precioMaximo: 2000000,
    ubicacion: {
      pais: '',
      departamento: '',
      ciudad: '',
      localidad: '',
      codigoPostal: ''
    }
  };

  ofertas1:Array<{
    ID, 
    INMUEBLE, 
    TITULO_AVISO, 
    PRECIO_MENSUAL, 
    PAIS, 
    DEPARTAMENTO, 
    CIUDAD, 
    DIRECCION, 
    ACTUALIZADO_EN
  }> = [];

  fotosOfertas1:Array<{FOTO}> = [];

  ofertas2:Array<{
    ID, 
    INMUEBLE, 
    TITULO_AVISO, 
    PRECIO_MENSUAL, 
    PAIS, 
    DEPARTAMENTO, 
    CIUDAD, 
    DIRECCION, 
    ACTUALIZADO_EN
  }> = [];
  
  fotosOfertas2:Array<{FOTO}> = [];

  API_URL = "http://localhost/asogasmonAPI/public/img/";

  
  constructor(
    public ofertasDestacadasService:OfertasDestacadasService
    ) { 
    
    /*Para tablets grandes */
    if(this.width < this.widthMobile){
      this.datosBusqueda.cantOfertasPorPagina = 6;
      this.claseTamColumna = 'col-4';
    }

    /*Para tablets */
    if(this.width < this.widthMobileSmartphoneContainer){
      this.claseContainer = 'container-fluid';
    }

    /*Para los celulares mas pequeños(maximo 380 px)*/
    if(this.width <= this.widthMobileMiniSmartphone){
      this.datosBusqueda.cantOfertasPorPagina = 4;
      this.claseTamColumna = 'col-6';
    } 

    
  }

  ngOnInit() {
    
   this.obtenerOfertas();
  }

  obtenerOfertas(){

    this.ofertasDestacadasService.obtenerOfertas(this.datosBusqueda).subscribe(
      (res: { ofertas, cantTotal, fotos }) => {

        console.log(res);
         
        let mitad = res.ofertas.length / 2;
        this.ofertas1 = res.ofertas.slice(0,mitad);
        this.fotosOfertas1 = res.fotos.slice(0,mitad);

        this.ofertas2 = res.ofertas.slice(-mitad);
        this.fotosOfertas2 = res.fotos.slice(-mitad);

      }, err => {
        console.log("Error al obtener las ofertas");
      }
    );

  }

}
