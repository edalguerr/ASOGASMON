import { Component, OnInit } from '@angular/core';

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
  
  constructor() {

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
    

    this.dirMapa = "https://maps.googleapis.com/maps/api/staticmap?center="+
    this.lat+","+this.lng+"&zoom="+this.zoomMapa+"&size="+this.sizeMapaAncho+"x400&maptype=roadmap"+
    "&markers=color:green%7Clabel:A%7C"+
    this.lat+","+this.lng+
    "&key="+this.key;

  }

  ngOnInit() {
    
  }

  mostrarMapa(){
    this.abrirMapa = !this.abrirMapa;
    //console.log(this.abrirMapa)
  }

}
