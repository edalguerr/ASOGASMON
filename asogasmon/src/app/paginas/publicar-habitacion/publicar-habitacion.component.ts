import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';
import { MapaEstaticoComponent } from 'src/app/componentes/mapa-estatico/mapa-estatico.component';
import { ServiciosEspecificosService } from 'src/app/servicios/serviciosEspecificos/servicios-especificos.service';
import { NormasCasaService } from 'src/app/servicios/nomasCasa/normas-casa.service';

@Component({
  selector: 'app-publicar-habitacion',
  templateUrl: './publicar-habitacion.component.html',
  styleUrls: ['./publicar-habitacion.component.css']
})
export class PublicarHabitacionComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('mapaEstaticoComponent') mapaEstaticoComponent: MapaEstaticoComponent;


  horarioApertura = "05:30";
  horarioCierre = "22:30";

  selectedDate;

  //ubicacion y configuracion del mapa
  coordPension = { lat: 4.69855158983652, lng: -74.07194335937498 };
  draggable = true;
  fullScreenMapa = false;
  streetViewControl = false;
  minZoom = 10;
  iconoPrecio = false;
  textPrecio = false;

  direccionActual = 'San josé de los campanos av. principal calle #66c-34b';

  geocoder;

  //Datos de la oferta
  habitacionesDisponibles: number = 1;
  habitacionIndividual = 'individual';
  nroHabitantes = 1;
  dimensionInmueble = 100;
  titulo;
  descripcion;

  //variables de control
  minDimensionInmueble = 50;
  maxHabitantes = 12;
  minHabitantes = 1;
  urlImagenPrincipal = '';
  urlImagenes = ["", "", "", "", "", ""];
  rutaImagenes = "assets/";
  imagenPrincipalAgregada = false;
  direccionAsginada = false;
  maxCaracteresTitulo = 70;
  maxCaracteresDescripcion = 300;
  clasesBase = 'fa fa-servicios';


  reglasCasa: Array<{ ID: any, NORMA: any }> = [];
  servicios: Array<{ ICONO: any, SERVICIO: any, ID: any, CHECKED: any }> = [];

  //opciones de autocompletado
  opcionesAutocompletado: google.maps.places.AutocompleteOptions = {
    componentRestrictions: {//limita las busquedas a solo colombia
      country: ['co']
    }
  };


  regExp = {
    tamInmueble: "\\d{1,10}",
    celular: "\\d{10}",
    precio: "\\d{1,15}",
    tituloReg: ".{0," + this.maxCaracteresTitulo + "}",
    titulo: new RegExp(".{0," + this.maxCaracteresTitulo + "}"),
    descripcion: new RegExp(".{0," + this.maxCaracteresDescripcion + "}")
  }


  constructor(
    public ubicacionMapaFiltros: UbicacioMapaFiltrosService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private serviciosEspecificos: ServiciosEspecificosService,
    private normasCasaService: NormasCasaService
  ) { }

  ngOnInit() {

    this.getLocation();
    this.inicializarAutocompletado();

    //recibimos los cambios de direccion del componente mapa
    this.mapaEstaticoComponent.emitEventDragEndHouse.subscribe((res) => {
      this.direccionAsginada = res;
      console.log("Emitido direccion asignada")
    })

    //Cargando servicios especificos
    this.getServiciosEspecificos();

    //Cargando normas de la casa
    this.getNormasCasa();

  }

  getServiciosEspecificos() {
    //Cargando servicios especificos
    if (this.serviciosEspecificos.serviciosEspecificos == null) {

      this.serviciosEspecificos.getServiciosEspecificos().subscribe(
        (res: { serviciosEspecificos: Array<{}> }) => {

          console.log(res);
          this.serviciosEspecificos.serviciosEspecificos = [];
          res.serviciosEspecificos.forEach((element: { ID, ICONO, SERVICIO }) => {

            //agregamos clases css
            element.ICONO += " " + this.clasesBase;
            this.servicios.push({ CHECKED: false, ...element });
            this.serviciosEspecificos.serviciosEspecificos.push(element);
          });

        },
        err => {
          console.log("Error al cargar los servicios esecificos")
          console.log(err)
        }
      )

    }
    else {
      this.serviciosEspecificos.serviciosEspecificos.forEach(element => {
        element.ICONO += " " + this.clasesBase;
        this.servicios.push({ CHECKED: false, ...element });
      })
    }
  }

  getNormasCasa() {
    //cargando las normas de la casa
    if (this.normasCasaService.normasCasa == null) {


      this.normasCasaService.getNormasCasa().subscribe(
        (res: { normasCasa: Array<{}> }) => {

          console.log(res);
          this.normasCasaService.normasCasa = [];
          res.normasCasa.forEach((element: { ID, NORMA }) => {

            this.reglasCasa.push(element);
            this.normasCasaService.normasCasa.push(element);
          });

        },
        err => {
          console.log("Error al cargar las normas de la casa")
          console.log(err)
        }
      )

    } else {
      this.normasCasaService.normasCasa.forEach(element => {
        
        this.reglasCasa.push(element);
      })
    }

  }


  getLocation() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position: Position) => {

        if (position) {
          this.coordPension.lat = position.coords.latitude;
          this.coordPension.lng = position.coords.longitude;
          this.obtenerDireccion({ coords: { lat: this.coordPension.lat, lng: this.coordPension.lng } });
        }

      },

        (error: PositionError) => console.log(error));

    }
    else {
      alert("Este buscador no soporta Geolocalización");
    }

  }

  changeStateActive(radio1, label1, radio2, label2) {

    if (radio1.checked) {
      label1.className = 'btn btn-outline-info active';
      label2.className = 'btn btn-outline-info ';
    }

  }

  //para ubicar al momento de publicar la direccion en el mapa, arrastrando
  //y soltando el marcador, usando latitud y longitud
  obtenerDireccion(data) {

    this.coordPension.lat = data.coords.lat;
    this.coordPension.lng = data.coords.lng;

    console.log("lat: " + this.coordPension.lat + " lng: " + this.coordPension.lng)

    let geocoder = new google.maps.Geocoder;

    geocoder.geocode({
      location: { lat: this.coordPension.lat, lng: this.coordPension.lng }
    }, (results, status) => {
      // si la solicitud fue exitosa
      if (status === google.maps.GeocoderStatus.OK) {

        // si encontró algún resultado.
        if (results[1]) {

          let codigoPostalPublicar;
          this.direccionAsginada = true;
          console.log(this.direccionAsginada);

          console.log(results[1].formatted_address);
          this.ubicacionMapaFiltros.direccion = results[1].formatted_address;
          console.log(results[1]);
          //obtenemos el codigo postal de la pension u apartamento
          for (var i = 0; i < results[1].address_components.length; i++) {

            let type = results[1].address_components[i].types;

            if (type.indexOf("postal_code") != -1) {

              codigoPostalPublicar = results[1].address_components[i].long_name;

              console.log('Codigo Postal 1: ' + codigoPostalPublicar);
            }
          }

        }

      }

    });


  }

  inicializarAutocompletado() {

    //verificar que se pueda minimo pais+departamento
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, this.opcionesAutocompletado);

      //inicializando el componente cuando cargue el mapa
      this.geocoder = new google.maps.Geocoder;

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();


          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.ubicacionMapaFiltros.lat = place.geometry.location.lat();
          this.ubicacionMapaFiltros.lng = place.geometry.location.lng();

          this.coordPension.lat = this.ubicacionMapaFiltros.lat;
          this.coordPension.lng = this.ubicacionMapaFiltros.lng;

          this.ubicacionMapaFiltros.zoom = 16;
          this.ubicacionMapaFiltros.direccion = place.name + ', ' + place.formatted_address;


          console.log(place);
          this.direccionAsginada = true;

          //cada vez que se busque en caso de ser para publicar se devolvera 
          //la direccion, si es para buscar actualizara las publicaciones


          //obtenemos el codigo postal de la dirección
          for (var i = 0; i < place.address_components.length; i++) {

            let type = place.address_components[i].types;

            if (type.indexOf("postal_code") != -1) {

              //si es para publicar almacenamos el codigo postal
              //si estamos buscando, usamos el codigo postal para hacer una consulta
              //a la base de datos y actualizar
              if (this.ubicacionMapaFiltros.codigoPostal != place.address_components[i].long_name) {
                //lanzamos peticion a la base de datos y actualizamos las ofertas
                this.ubicacionMapaFiltros.codigoPostal = place.address_components[i].long_name;

              }
            }

          }


        });
      });

    }
    );

  }

  onChangeDimensionInmueble() {
    if (this.dimensionInmueble < this.minDimensionInmueble) {
      this.dimensionInmueble = this.minDimensionInmueble;
    }
  }

  funcionTest() {
    console.log('hola mundo')

  }



  //funciones para controlar los valores de habitaciones disponibles, 
  //hanitaciones individuale y compartidas, realizando las respectivas validaciones
  //para el correcto mantenimiento de cantidades, para que no sobre ni falten valores
  aumentarHabitaciones() {

    if (this.habitacionesDisponibles < 5) {
      this.habitacionesDisponibles++;
    }


  }

  disminuirHabitaciones() {

    if (this.habitacionesDisponibles > 1) {
      this.habitacionesDisponibles--;
    }

  }



  //controles número de habitantes
  aumentarHabitantes() {
    if (this.nroHabitantes < this.maxHabitantes) {
      this.nroHabitantes++;
    }
  }

  disminuirHabitantes() {
    if (this.nroHabitantes > this.minHabitantes) {
      this.nroHabitantes--;
    }
  }

  //carga de archivos
  //esta opcion funciona bien para cargar imagenes
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.urlImagenPrincipal = reader.result.toString();
        this.imagenPrincipalAgregada = true;

      }
    }
  }

  onSelectFileSecond(event, indImage) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.urlImagenes[indImage] = reader.result.toString();
      }
    }
  }


  guardar() {

    //para protegernos de descripciones o titulos mas largas de lo permitido
    if (this.regExp.descripcion.test(this.descripcion) && this.regExp.titulo.test(this.titulo)
      && this.imagenPrincipalAgregada && this.direccionAsginada) {

      console.log('publicar Habitación submit')
    }
    else {
      console.log('publicar Habitación submit invalido')
    }

  }

}
