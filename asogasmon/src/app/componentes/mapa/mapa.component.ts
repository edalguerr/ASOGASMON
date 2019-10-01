import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  rutaImg = "assets/";
  
  lat: number = this.ubicacioMapaFiltrosService.lat;
  lng: number = this.ubicacioMapaFiltrosService.lng;

  lat2: number = 4.69855158983652;
  lng2: number = -74.07194335937498;

  labelMarker = {
   color: 'floralwhite',
    fontFamily: 'Indie Flower',//cursive
    fontSize: '12px',//10px
    fontWeight: 'bold',
    letterSpacing:'0.5px',
    text: "$5'000.000"
  }

  titleMarker:string = "direccion";
  zoom:number = 12;
  minZoom:number = 12;
  draggable = false;
  streetView:boolean = false;

  departamentoActual = "";
  ciudadActual = "";
  codigoPostal = this.ubicacioMapaFiltrosService.codigoPostal;
  geocoder;
  tiempoActual = new Date();
  tiempoEspera:number = 0; //5segundos
  tiempo = this.tiempoActual.getTime();
  primeravez:boolean = true;

  marker:google.maps.Marker;

  coordenadas:Array<{lat, lng}> = [
    {lat: 4.697610624442374, lng: -74.07511909484862},
    {lat: 4.700176890707453, lng: -74.07177169799803},
    {lat: 4.698979300959474, lng: -74.06516273498534},
    {lat: 4.691793719281326, lng: -74.06790931701659},
    {lat: 4.697525082070904, lng: -74.08052642822264},
    {lat: 4.7012033945677425, lng: -74.0587254333496},
    {lat: 4.707875632780457, lng: -74.07451828002928},
    {lat: 4.6964130302861475, lng: -74.08344467163084}
  ]

  clusterStyles = [
    {     
      textColor: "#000000",
      textSize: 12,
      url: "'assets/m2.png'",
      height: 64,
      width: 64,
      anchor: [18, 65],
      backgroundPosition: 'center'
    },
    {
      textColor: "#000000",
      textSize: 12,
      url: "'assets/m1.png'",
      height: 64,
      width: 64,
      anchor: [18, 65],
      backgroundPosition: 'center'
    } 
  ]

  heightMapa = Math.round(Math.round(window.innerHeight * 0.9) * 0.86);

  constructor(private mapsAPILoader: MapsAPILoader, public ubicacioMapaFiltrosService:UbicacioMapaFiltrosService ) { 

  }

  ngOnInit() {
    if(!this.ubicacioMapaFiltrosService.dirreccionBuscada){
      this.getLocation();
      //console.log('obtuvo hubicacion navegador')
      //console.log(this.ubicacioMapaFiltrosService.dirreccionBuscada)
    }
    

    this.mapsAPILoader.load().then(() => {
      //inicializando el componente cuando cargue el mapa
      this.geocoder = new google.maps.Geocoder;
    });
  }

  markerIconUrl() {
    return require('../../../assets/bocadillo(6).png') 
  }

  getLocation() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position: Position) => {

        if (position) {
          this.ubicacioMapaFiltrosService.lat = position.coords.latitude;
          this.ubicacioMapaFiltrosService.lng = position.coords.longitude;
        }

      },
      
      (error: PositionError) => console.log(error));

    } 
    else {
      alert("Este buscador no soporta Geolocalización");
    }

  }

  //para ubicar al momento de publicar la direccion en el mapa, arrastrando
  //y soltando el marcador
  onDragEnd(data){

    this.lat2 = data.coords.lat;
    this.lng2 = data.coords.lng;

    console.log("lat: "+this.lat2+" lng: "+this.lng2)
  
    let geocoder = new google.maps.Geocoder;

    geocoder.geocode({
      location:{lat: this.lat2, lng: this.lng2}
    },(results, status)=>{
      // si la solicitud fue exitosa
      if (status === google.maps.GeocoderStatus.OK) {

        // si encontró algún resultado.
        if (results[1]) {
          
          let codigoPostalPublicar;

          console.log(results[1].formatted_address); 

          //obtenemos el codigo postal de la pension u apartamento
          for (var i = 0; i < results[1].address_components.length; i++){

            let type = results[1].address_components[i].types;
              
            if (type.indexOf("postal_code") != -1){
              
              codigoPostalPublicar = results[1].address_components[i].long_name;

              console.log('Codigo Postal: '+codigoPostalPublicar);
            }
          }

        }

      }

    });

  }

  onCenterChange(data){

  /*
    //evitar sobreconsultas, ejecutando la funcion cada cierto tiempo
   //en este caso cada 5 segundos
    if(!this.primeravez){
      this.tiempoEspera = 5000;
    }

    this.tiempoActual = new Date();

    if(((this.tiempo + this.tiempoEspera) - this.tiempoActual.getTime()) <= 0){

      this.lat = data.lat;
      this.lng = data.lng;
      this.actualizarUbicacion();
      this.tiempo = this.tiempoActual.getTime();

    }  
    
    this.primeravez = false;*/
  }

  actualizarUbicacion(){

    this.geocoder.geocode({
      location:{lat: this.lat, lng: this.lng}
    },(results, status)=>{
  
      // si la solicitud fue exitosa
      if (status === google.maps.GeocoderStatus.OK) {
  
        // si encontró algún resultado.
        if (results[1]) {
  
          //let peticionHecha:boolean = false;
  
          for (var i = 0; i < results[1].address_components.length; i++){
  
  
            let type = results[1].address_components[i].types;
              
            //actualizamos las ofertas a mostrar en el mapa cada que cambiemos
            //de codigo postal(cada sector de ciudad o municipio tiene uno)
            if (type.indexOf("postal_code") != -1){
  
              if(this.ubicacioMapaFiltrosService.codigoPostal != results[1].address_components[i].long_name){
                //lanzamos peticion a la base de datos y actualizamos las ofertas
                this.ubicacioMapaFiltrosService.codigoPostal = results[1].address_components[i].long_name;
                //this.ubicacioMapaFiltrosService.lat = results[1].geometry.location.lat();
                //this.ubicacioMapaFiltrosService.lng = results[1].geometry.location.lng();
                console.log('direccion: '+results[1].formatted_address);
                console.log('cod. postal: '+this.ubicacioMapaFiltrosService.codigoPostal);
              }
            }
            
            /*
            //para ciudades y municipios
            if (type.indexOf("administrative_area_level_2") != -1  && !peticionHecha){
              console.log('2: '+i)
              console.log('ciudad: '+this.ciudadActual);
              console.log('info: '+results[1].address_components[i].long_name)
  
              //lanzar consulta y actualizar marcadores cuando cambie de ciudad o municipio
              if(this.ciudadActual != results[1].address_components[i].long_name){
                //lanzamos peticion a la base de datos
                this.ciudadActual = results[1].address_components[i].long_name;
                this.departamentoActual = results[1].address_components[1+i].long_name;
                peticionHecha = true;
                console.log('Actualizacion de ciudad: '+this.ciudadActual +" - "+this.departamentoActual);
              }
  
            }//departamentos, capitales y ciudades grandes
            else if (type.indexOf("administrative_area_level_1") != -1 && !peticionHecha){
              console.log('1: '+i)
              console.log('departamento: '+this.departamentoActual);
              console.log('info: '+results[1].address_components[i].long_name)
              //lanzar consulta y actualizar marcadores cuando cambie de ciudad o municipio
              if(this.departamentoActual != results[1].address_components[i].long_name ){
                //lanzamos peticion a la base de datos
                this.departamentoActual = results[1].address_components[i].long_name;
                peticionHecha = true;
                console.log('Actualizacion de departamento: '+this.departamentoActual);
              }
  
            }*/
          }
          console.log(results[1]);
        }
      }
    });
  
  }
  
}
