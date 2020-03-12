import { Component, OnInit } from '@angular/core';
import { OfertaDetalladaActualService } from 'src/app/servicios/ofertaDetalladaActual/oferta-detallada-actual.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion-detallada',
  templateUrl: './informacion-detallada.component.html',
  styleUrls: ['./informacion-detallada.component.css']
})

export class InformacionDetalladaComponent implements OnInit {

  pension = true;
  casaApto = false;
  habitacion = false;
  precio = 4000000;

  tipoInmueble = "Pensión";
  coordOferta ={lat :4.69855158983652, lng:-74.07194335937498};
  abrirMapa= false;
  
  zoomMapa = 13; 
  lat = 40.711614;
  lng = -74.012318
  key = "AIzaSyAX4J5NJdxvo9Jm5sP_C--t98njBVFP__s";
  dirMapa = "https://maps.googleapis.com/maps/api/staticmap?center=40.711614,-74.012318&zoom=13&size=600x300&maptype=roadmap"+
  "&markers=color:green%7Clabel:A%7C40.711614,-74.012318"+
  "&key=AIzaSyAX4J5NJdxvo9Jm5sP_C--t98njBVFP__s";
  sizeMapaAncho = 600;

  widthMobile = 992;
  widthSmartphone = 575;
  width = window.innerWidth; // ancho del navegador
  
  API_URL = "http://localhost/asogasmonAPI/public/img/";

  ruta = "ofertasCasaApto";

  constructor(
    private activateRoute:ActivatedRoute,
    public ofertaDetalladaActualService:OfertaDetalladaActualService
  ) {

    /*Para celulares*/
    if(this.width < this.widthSmartphone){
      this.zoomMapa = 17;
      this.sizeMapaAncho = this.width - 70;
    }
    /*Para tablets grandes */
    else if(this.width < this.widthMobile){
      this.zoomMapa = 17;
      this.sizeMapaAncho = 420;
    }
    
    
    this.lat = this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.LATITUD;
    this.lng = this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.LONGITUD;

    this.coordOferta.lat = this.lat;
    this.coordOferta.lng = this.lng;

    this.dirMapa = "https://maps.googleapis.com/maps/api/staticmap?center="+
    this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.LATITUD+","+
    this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.LONGITUD+"&zoom="+this.zoomMapa+"&size="+this.sizeMapaAncho+"x400&maptype=roadmap"+
    "&markers=color:green%7Clabel:A%7C"+
    this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.LATITUD+","+
    this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.LONGITUD+
    "&key="+this.key;
    
  }

  ngOnInit() {
    
    let categoria = this.activateRoute.parent.snapshot.url[0].path;
        
    if (categoria == 'ofertasCasaApto') {
      
      this.ruta = 'ofertasCasaApto';
      this.casaApto = true;
      this.pension = false;
      this.habitacion = false;
    }
    else if (categoria == 'ofertasHabitacion') {

      this.ruta = 'ofertasHabitacion';
      this.tipoInmueble = "Habitación";
      this.casaApto = false;
      this.pension = false;
      this.habitacion = true;
    }
    else {

      this.ruta = 'ofertasPension'
      this.tipoInmueble = "Pension";
      this.casaApto = false;
      this.pension = true;
      this.habitacion = false;
    }

  }

  mostrarMapa(){
    this.abrirMapa = !this.abrirMapa;
    //console.log(this.abrirMapa)
  }

}
