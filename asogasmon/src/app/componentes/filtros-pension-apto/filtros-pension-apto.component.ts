import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

import { ActivatedRoute, Router } from '@angular/router';

import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';


@Component({
  selector: 'app-filtros-pension-apto',
  templateUrl: './filtros-pension-apto.component.html',
  styleUrls: ['./filtros-pension-apto.component.css']
})
export class FiltrosPensionAptoComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;
  @Output() emitEvent:EventEmitter<Boolean> = new EventEmitter<Boolean>();
     
  mostrarMapaMobile = false;

  //opciones de autocompletado
  opcionesAutocompletado:google.maps.places.AutocompleteOptions = {
    //types: ['(regions)']//limita la busqueda a regiones, ciudades y otros
    componentRestrictions: { //limita las busquedas a solo colombia
      country: ['co']
    }
  };

  lat: number = this.ubicacioMapaFiltrosService.lat;
  lng: number = this.ubicacioMapaFiltrosService.lng;
  codigoPostal = this.ubicacioMapaFiltrosService.codigoPostal;
  geocoder;
  zoom:number = 12;


  value: number = 2000000;
  valueAnterior = this.value;
 
  valApto = 'apartamento';
  valPension = 'pension';
  valHabitacion = 'habitacion';

  options: Options = {
    floor: 0,
    ceil: 2000000,
    //ticksArray: [0,250000 ,500000, 750000, 1000000, 1250000, 1500000, 1750000, 2000000],
    step:50000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Precio maximo:</b> $' + value;
        default:
          return '$' + value;
      }
    },
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      return '#efab7c';//'#2AE02A';
    },
    getPointerColor: (value: number): string => {  
    return '#0db9f0';//'#2AE02A';
    }
  };

  categoriaBusqueda = "apartamento";

  precioBocadilloFiltroMostrar = false;

  constructor(public ubicacioMapaFiltrosService:UbicacioMapaFiltrosService, private rutaActiva: ActivatedRoute, private router:Router, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
    
  }

  ngOnInit() {
    
    let categoria = this.rutaActiva.snapshot.url[0].path;

    if(categoria == 'apartamentos'){
      this.categoriaBusqueda = this.valApto;
    }
    else if(categoria == 'pensiones'){
      this.categoriaBusqueda = this.valPension;
    }
    else{
      this.categoriaBusqueda = this.valHabitacion;
    }

    this.inicializarAutocompletado(); 
  }

  onChange() {
    let sigRuta;   

    if(this.categoriaBusqueda == this.valPension){
      sigRuta = 'pensiones';
    }
    else if(this.categoriaBusqueda == this.valApto){
      sigRuta = 'apartamentos';
    }
    else{
      sigRuta = 'habitaciones';
    }
    

    this.router.navigateByUrl('/'+sigRuta);
  }


  inicializarAutocompletado(){
    //console.log("Filtros iniciados")
    //verificar que se pueda minimo pais+departamento
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement,this.opcionesAutocompletado);

      //inicializando el componente cuando cargue el mapa
      this.geocoder = new google.maps.Geocoder;

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
       
 
          if(place.geometry === undefined || place.geometry === null ){
            //console.log("Busqueda con filtros fallida")
            return;
          }
 
          this.ubicacioMapaFiltrosService.lat = place.geometry.location.lat();
          this.ubicacioMapaFiltrosService.lng = place.geometry.location.lng();
          this.ubicacioMapaFiltrosService.zoom = 16;
          this.ubicacioMapaFiltrosService.dirreccionBuscada = true;
          //console.log('Informacion obtenida por filtros')
          //console.log(this.ubicacioMapaFiltrosService.dirreccionBuscada)
          
          console.log(place);
          //cada vez que se busque en caso de ser para publicar se devolvera 
          //la direccion, si es para buscar actualizara las publicaciones

 
          //obtenemos el codigo postal de la dirección
          for (var i = 0; i < place.address_components.length; i++){
  
            let type = place.address_components[i].types;
              
            if (type.indexOf("postal_code") != -1){
              
              //si es para publicar almacenamos el codigo postal
              //si estamos buscando, usamos el codigo postal para hacer una consulta
              //a la base de datos y actualizar
              if(this.ubicacioMapaFiltrosService.codigoPostal != place.address_components[i].long_name){
                //lanzamos peticion a la base de datos y actualizamos las ofertas
                this.ubicacioMapaFiltrosService.codigoPostal = place.address_components[i].long_name;
                console.log('direccion: '+ place.formatted_address);
                console.log('cod. postal: '+this.ubicacioMapaFiltrosService.codigoPostal);
              }
            }

          }


        }); 
      });

    }
    );

  }

  mostrarMapaEstado(){
    this.mostrarMapaMobile = !this.mostrarMapaMobile;
    //console.log('evento ejecutado')
    this.emitEvent.emit(this.mostrarMapaMobile);
    
  }

  cerrarMapaMobile(){
    this.mostrarMapaMobile = false;
    this.emitEvent.emit(this.mostrarMapaMobile);

    setTimeout(()=>{
      this.inicializarAutocompletado(); 
    },2000)
  }

  MostrarBocadilloFiltro(){
    this.valueAnterior = this.value;
    this.precioBocadilloFiltroMostrar = !this.precioBocadilloFiltroMostrar;
  }

  mantenerPrecio(){
    this.value = this.valueAnterior;
    this.precioBocadilloFiltroMostrar = false;
  }

  actualizarPrecio(){
    this.valueAnterior = this.value;
    this.precioBocadilloFiltroMostrar = false;
  }

}
