import { Component, OnInit } from '@angular/core';
import { UltimasOfertasService } from 'src/app/servicios/ultimasOfertas/ultimas-ofertas.service';
import { DatosBusquedaInmuebles } from 'src/app/core/interfaces/datos-busqueda-inmuebles';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  width = window.innerWidth; // ancho del navegador
  widthMobileMedium = 480;
  
  datosBusqueda: DatosBusquedaInmuebles = {
    cantOfertasPorPagina: 16,
    paginacionActual: 1,
    precioMaximo: 2000000,
    ubicacion: {
      pais: '',
      departamento: '',
      ciudad: '',
      localidad: '',
      codigoPostal: ''
    }
  };

  ofertas:Array<{
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

  fotosOfertas:Array<{FOTO}> = [];

  cantTotal = 16;

  API_URL = "http://localhost/asogasmonAPI/public/img/";

  page = 1;

  constructor(
    private ultimasOfertasService:UltimasOfertasService
  ) { 

    if(this.width <= this.widthMobileMedium){
      this.datosBusqueda.cantOfertasPorPagina = 8;
    }
  }

  ngOnInit() {

    this.obtenerOfertas();
  }

  obtenerOfertas(){

    this.ultimasOfertasService.obtenerOfertas(this.datosBusqueda).subscribe(
      (res: { ofertas, cantTotal, fotos }) => {

        console.log(res);
                
        this.ofertas = res.ofertas;
        this.fotosOfertas = res.fotos;
        this.cantTotal = res.cantTotal;

      }, err => {
        console.log("Error al obtener las ofertas");
      }
    );

  }

  paginacionCambiada(){
    this.datosBusqueda.paginacionActual = this.page;
    this.obtenerOfertas();
  }

}
