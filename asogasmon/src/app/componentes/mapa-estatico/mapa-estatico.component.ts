import { Component, OnInit,Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-mapa-estatico',
  templateUrl: './mapa-estatico.component.html',
  styleUrls: ['./mapa-estatico.component.css']
})
export class MapaEstaticoComponent implements OnInit {
  
  rutaImg = "assets/";

  @Input() latitud ;
  @Input() longitud;
  @Input() latitud2;
  @Input() longitud2;
  @Input() draggable = false;
  @Input() fullScreenMapa = true;
  @Input() streetViewControl = true;
  @Input()  minZoom = 12;
  
  @Input()  iconoPrecio = true;
  @Input()  textPrecio = true;

  @ViewChild(AgmMap,{static:false}) public agmMap: AgmMap
 
  @Output() emitEventDragEndHouse:EventEmitter<{dirAsignada:Boolean, data:any}> = new EventEmitter<{dirAsignada:Boolean, data:any}>();


  labelMarker = {
    color: 'floralwhite',
    fontFamily: 'Indie Flower',//cursive
    fontSize: '12px',//10px
    fontWeight: 'bold',
    letterSpacing:'0.5px',
    text: "$5'000.000"
  }

  titleMarker:string = "direccion";
  

  constructor(public ubicacionMapaFiltros:UbicacioMapaFiltrosService) {
    
  }

  ngOnInit() {
    
  }

  markerIconUrl() {
    if(!this.iconoPrecio){
      return require('../../../assets/localizacion-de-casa(1).png')
    }
    return require('../../../assets/bocadillo(6).png')
  }

  labelMarkerAsign(){
    return (this.textPrecio)? this.labelMarker:null ;
  }

  //para ubicar al momento de publicar la direccion en el mapa, arrastrando
  //y soltando el marcador
  onDragEnd(data){

    if(!Number.isNaN(data.coords.lng) && !Number.isNaN(data.coords.lat)){

    
      this.latitud = data.coords.lat;
      this.latitud2 = data.coords.lat;
      
      this.longitud = data.coords.lng;
      this.longitud2 = data.coords.lng;

      console.log("lat: "+data.coords.lat+" lng: "+data.coords.lng)
    
      let geocoder = new google.maps.Geocoder;

      geocoder.geocode({
        location:{lat: data.coords.lat, lng: data.coords.lng}
      },(results, status)=>{
        // si la solicitud fue exitosa
        if (status === google.maps.GeocoderStatus.OK) {

          // si encontró algún resultado.
          if (results[1]) {
            
            let codigoPostalPublicar;

            console.log(results[1].formatted_address); 
            this.ubicacionMapaFiltros.direccion = results[1].formatted_address;
            
            //para avisar que se seleccionó una ubicacion arrastrando la casita
            //para publicar, emitimos la longitud y latitud
            let coords = {lat: results[1].geometry.location.lat(), lng: results[1].geometry.location.lng()}
            data.coords = coords;            
            this.emitEventDragEndHouse.emit({dirAsignada:true, data:data});
            console.log("emitiod por el hijo")
            
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

  }


  onCenterChange(data){
   // console.log("datos de prueba: ")
    //console.log("Lat: "+data.lat);
    //console.log("Lng: "+data.lng);
  }

  onMapalisto(data){
    
    //console.log("mapa listo");
  }

}
