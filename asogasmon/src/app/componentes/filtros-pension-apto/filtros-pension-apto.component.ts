import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

import { ActivatedRoute, Router } from '@angular/router';

import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';
import { DatosBusquedaInmuebles } from 'src/app/interfaces/datos-busqueda-inmuebles';
import { OfertaCasaAptoService } from 'src/app/servicios/ofertasCasasAptos/oferta-casa-apto.service';
import { OfertasInmueblesService } from 'src/app/servicios/ofertasInmuebles/ofertas-inmuebles.service';


@Component({
  selector: 'app-filtros-pension-apto',
  templateUrl: './filtros-pension-apto.component.html',
  styleUrls: ['./filtros-pension-apto.component.css']
})
export class FiltrosPensionAptoComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;
  @Output() emitEvent: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  
  mostrarMapaMobile = false;

  //opciones de autocompletado
  opcionesAutocompletado: google.maps.places.AutocompleteOptions = {
    types: ['(regions)'],//limita la busqueda a regiones, ciudades y otros,
    componentRestrictions: {//limita las busquedas a solo colombia
      country: ['co']
    }
  };

  lat: number = this.ubicacioMapaFiltrosService.lat;
  lng: number = this.ubicacioMapaFiltrosService.lng;
  codigoPostal = this.ubicacioMapaFiltrosService.codigoPostal;
  geocoder;
  zoom: number = 12;


  value: number = 2000000;
  valueAnterior = this.value;

  valApto = 'apartamento';
  valPension = 'pension';
  valHabitacion = 'habitacion';

  //opciones del slider de precio
  options: Options = {
    floor: 0,
    ceil: 2000000,
    //ticksArray: [0,250000 ,500000, 750000, 1000000, 1250000, 1500000, 1750000, 2000000],
    step: 50000,
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

  datosBusqueda: DatosBusquedaInmuebles = {
    cantOfertasPorPagina: 12,
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

  constructor(
    public ubicacioMapaFiltrosService: UbicacioMapaFiltrosService,
    private rutaActiva: ActivatedRoute, private router: Router,
    private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,
    private ofertaCasaAptoService: OfertaCasaAptoService,
    private ofertasInmuebles:OfertasInmueblesService
  ) { }


  ngOnInit() {

    let categoria = this.rutaActiva.snapshot.url[0].path;

    if (categoria == 'apartamentos') {
      this.categoriaBusqueda = this.valApto;
    }
    else if (categoria == 'pensiones') {
      this.categoriaBusqueda = this.valPension;
    }
    else {
      this.categoriaBusqueda = this.valHabitacion;
    }

    this.obtenerOfertas();
    this.inicializarAutocompletado();

  }

  onChange() {
    let sigRuta;

    if (this.categoriaBusqueda == this.valPension) {
      sigRuta = 'pensiones';
    }
    else if (this.categoriaBusqueda == this.valApto) {
      sigRuta = 'apartamentos';
    }
    else {
      sigRuta = 'habitaciones';
    }


    this.router.navigateByUrl('/' + sigRuta);
  }


  //para ubicar al momento de publicar la direccion en el mapa
  //Usando latitud y longitud
  obtenerDireccion(data) {

    this.ubicacioMapaFiltrosService.lat = data.coords.lat;
    this.ubicacioMapaFiltrosService.lng = data.coords.lng;

    let geocoder = new google.maps.Geocoder;

    geocoder.geocode({
      location: { lat: this.ubicacioMapaFiltrosService.lat, lng: this.ubicacioMapaFiltrosService.lng }
    },
      (results, status) => {
        // si la solicitud fue exitosa
        if (status === google.maps.GeocoderStatus.OK) {

          // si encontró algún resultado.
          if (results[1]) {
            //asignamos valores por defecto, cada vez que cambia de ubicacion 
            //para no tener datos de la ubicacion anterior en caso que la nueva ubicacion
            //tenga menos precision
            this.resetUbicacion();

            this.ubicacioMapaFiltrosService.direccion = results[1].formatted_address;
            console.log(results[1])

            //obtenemos la ubicacion separada en posiciones del array(ciudad,departamento,pais)
            //let arrayUbicacion = results[1].formatted_address.split(',');
            let arrayUbicacion = this.searchElement.nativeElement.value.split(',');
            arrayUbicacion = arrayUbicacion.reverse();
            console.log(arrayUbicacion)

            this.asignarUbicacionArray(arrayUbicacion);

            //obtenemos el codigo postal de la pension u apartamento
            for (var i = 0; i < results[1].address_components.length; i++) {

              let type = results[1].address_components[i].types;

              if (type.indexOf("postal_code") != -1) {

                this.datosBusqueda.ubicacion.codigoPostal = results[1].address_components[i].long_name;
                //console.log('Codigo Postal: ' + codigoPostalPublicar);
              }
            }

            console.log(this.datosBusqueda.ubicacion)

            this.obtenerOfertas();

          }

        }

      });


  }


  inicializarAutocompletado() {

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, this.opcionesAutocompletado);

      //inicializando el componente cuando cargue el mapa
      this.geocoder = new google.maps.Geocoder;

      //cada que se cambie de ubicación
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //si no se elige una ubicacion del autocompletado
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.ubicacioMapaFiltrosService.lat = place.geometry.location.lat();
          this.ubicacioMapaFiltrosService.lng = place.geometry.location.lng();

          this.ubicacioMapaFiltrosService.zoom = 16;
          this.ubicacioMapaFiltrosService.direccion = place.formatted_address;
          this.obtenerDireccion({ coords: { lat: this.ubicacioMapaFiltrosService.lat, lng: this.ubicacioMapaFiltrosService.lng } })

        });
      });

    }
    );

  }


  asignarUbicacionArray(arrayUbicacion: Array<any>) {
    console.log("asignando")
    //pasando los datos a la variable que contiene los datos de los filtros de busqueda
    //teniendo en cuenta la exactitud de la ubicacion proporcionada
    let exactitud = arrayUbicacion.length;
    switch (exactitud) {
      case 1:
        this.datosBusqueda.ubicacion.pais = arrayUbicacion[0].trim().toUpperCase();
        break;
      case 2:
        this.datosBusqueda.ubicacion.pais = arrayUbicacion[0].trim().toUpperCase();
        this.datosBusqueda.ubicacion.departamento = arrayUbicacion[1].trim().toUpperCase();
        break;
      case 3:
        this.datosBusqueda.ubicacion.ciudad = arrayUbicacion[2].trim().toUpperCase();
        this.datosBusqueda.ubicacion.departamento = arrayUbicacion[1].trim().toUpperCase();
        this.datosBusqueda.ubicacion.pais = arrayUbicacion[0].trim().toUpperCase();
        break;
      default:
        if (exactitud > 3) {
          this.datosBusqueda.ubicacion.localidad = arrayUbicacion[3].trim().toUpperCase();
          this.datosBusqueda.ubicacion.ciudad = arrayUbicacion[2].trim().toUpperCase();
          this.datosBusqueda.ubicacion.departamento = arrayUbicacion[1].trim().toUpperCase();
          this.datosBusqueda.ubicacion.pais = arrayUbicacion[0].trim().toUpperCase();
        }
        break;
    }

  }

  resetUbicacion() {
    this.datosBusqueda.ubicacion = {
      pais: "",
      departamento: "",
      ciudad: "",
      localidad: '',
      codigoPostal: ""
    }
  }

  //obtenemos ofertas dependiendo el tipo inmueble que se este buscando
  obtenerOfertas() {

    if (this.categoriaBusqueda == this.valPension) {

    }
    else if (this.categoriaBusqueda == this.valApto) {
      this.obtenerOfertasApartamentos();
    }
    else {

    }

  }

  obtenerOfertasApartamentos() {
    
    this.ofertaCasaAptoService.buscarCasasAptos(this.datosBusqueda).subscribe(
      (res: { ofertas, cantTotal, fotos }) => {

        console.log(res);
        this.ofertasInmuebles.ofertas = res.ofertas;
        this.ofertasInmuebles.fotosOfertas = res.fotos;
        this.ofertasInmuebles.cantTotal = res.cantTotal;

      }, err => {
        console.log("Error al obtener las ofertas");
      }
    )
  }


  //METODOS DE CONTROL PARA EL MAPA Y FILTRO EN DISPOSITIVOS MOVILES
  mostrarMapaEstado() {
    this.mostrarMapaMobile = !this.mostrarMapaMobile;
    this.emitEvent.emit(this.mostrarMapaMobile);

  }

  cerrarMapaMobile() {
    this.mostrarMapaMobile = false;
    this.emitEvent.emit(this.mostrarMapaMobile);

    setTimeout(() => {
      this.inicializarAutocompletado();
    }, 2000)
  }

  MostrarBocadilloFiltro() {
    this.valueAnterior = this.value;
    this.precioBocadilloFiltroMostrar = !this.precioBocadilloFiltroMostrar;
  }

  mantenerPrecio() {
    this.value = this.valueAnterior;
    this.precioBocadilloFiltroMostrar = false;
  }

  actualizarPrecio() {
    this.valueAnterior = this.value;
    this.precioBocadilloFiltroMostrar = false;
    this.datosBusqueda.precioMaximo = this.value;
    this.obtenerOfertas();
  }

  //actualiza el precio, para ordenadores
  actualizarPrecioMaximo() {
    this.datosBusqueda.precioMaximo = this.value;
    this.obtenerOfertas();
  }

}
