import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';
import { MapaEstaticoComponent } from 'src/app/componentes/mapa-estatico/mapa-estatico.component';
import { ServiciosEspecificosService } from 'src/app/servicios/serviciosEspecificos/servicios-especificos.service';
import { NormasCasaService } from 'src/app/servicios/nomasCasa/normas-casa.service';
import { Pension } from 'src/app/interfaces/pension';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-publicar-pension',
  templateUrl: './publicar-pension.component.html',
  styleUrls: ['./publicar-pension.component.css']
})
export class PublicarPensionComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('mapaEstaticoComponent') mapaEstaticoComponent: MapaEstaticoComponent;
  @ViewChild('btnInicioSesionModal') btnInicioSesionModal: ElementRef;
  @ViewChild('btnMensajePublicarModal') btnMensajePublicarModal: ElementRef;

  //ubicacion y configuracion del mapa
  coordPension = { lat: 4.69855158983652, lng: -74.07194335937498 };
  draggable = true;
  fullScreenMapa = false;
  streetViewControl = false;
  minZoom = 10;
  iconoPrecio = false;
  textPrecio = false;

  geocoder;

  //Variables de control
  maxHabitantes = 12;
  minHabitantes = 1;
  urlImagenPrincipal = '';
  urlImagenes = ["", "", "", "", "", ""];
  rutaImagenes = "assets/";
  imagenPrincipalAgregada = false;
  datosIncorrectos = false;
  direccionAsginada = false;
  clasesBase = 'fa fa-servicios';
  maxCaracteresTitulo = 70;
  maxCaracteresDescripcion = 300;
  //maxPorAsignar = 0;

  reglasCasa: Array<{ ID: any, NORMA: any, CHECKED: any }> = [];
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

  //Datos de la oferta
  habitacionesDisponibles: number = 1;
  cantIndividuales = this.habitacionesDisponibles;
  cantCompartidas = 0;
  nroHabitantes = 1;
  habitacioneBanioInterno = 0;
  titulo;
  descripcion;
  precio;
  celular;

  radioTipoHabitacion = 'INDIVIDUAL';
  radioAlimentacion = 'SI';
  radioGeneroAdmitido = 'TODOS';

  ofertaNueva: Pension = {

    HABITACIONES_DISPONIBLES: 0,
    HABITACIONES_INDIVIDUALES: 0,
    HABITACIONES_COMPARTIDAS: 0,
    NUM_HABITANTES: 0,
    HABITACIONES_BANIO_INTERNO: 0,
    GENERO_ADMITIDO: '',
    ALIMENTACION_INCLUIDA: 0,
    PRECIO_MENSUAL: 0,
    NUM_CELULAR: 0,
    TITULO_AVISO: '',
    DESCRIPCION_AVISO: '',
    USUARIO_ID: 0,
    UBICACION: {
      PAIS: '',
      DEPARTAMENTO: '',
      CIUDAD: '',
      LOCALIDAD: '',
      DIRECCION: '',
      CODIGO_POSTAL: ''
    },
    FOTOS: [],
    SERVICIOS_ESPECIFICOS: [],
    NORMAS_CASA: []
  }

  constructor(
    public ubicacionMapaFiltros: UbicacioMapaFiltrosService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private serviciosEspecificos: ServiciosEspecificosService,
    private normasCasaService: NormasCasaService,
    private usuarioService:UsuarioService
  ) { }

  ngOnInit() {

    this.getLocation();
    this.inicializarAutocompletado();

    //recibimos los cambios de direccion del componente mapa
    this.mapaEstaticoComponent.emitEventDragEndHouse.subscribe((res: { dirAsignada, data: any }) => {
      this.direccionAsginada = res.dirAsignada;
      this.obtenerDireccion(res.data);
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

          this.normasCasaService.normasCasa = [];
          res.normasCasa.forEach((element: { ID, NORMA }) => {

            this.reglasCasa.push({ CHECKED: false, ...element });
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

        this.reglasCasa.push({ CHECKED: false, ...element });
      })
    }

  }


  //obtener ubicacion actual
  getLocation() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position: Position) => {

        if (position) {
          this.coordPension.lat = position.coords.latitude;
          this.coordPension.lng = position.coords.longitude;
          this.obtenerDireccion({
            coords: {
              lat: this.coordPension.lat,
              lng: this.coordPension.lng
            }

          });

        }

      },
        (error: PositionError) => console.log(error)
      );

    }
    else {
      alert("Este buscador no soporta Geolocalización, considera actualizarlo")
    }

  }

  //para ubicar al momento de publicar la direccion en el mapa
  //Usando latitud y longitud
  obtenerDireccion(data) {

    this.coordPension.lat = data.coords.lat;
    this.coordPension.lng = data.coords.lng;


    let geocoder = new google.maps.Geocoder;

    geocoder.geocode({
      location: { lat: this.coordPension.lat, lng: this.coordPension.lng }
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

            this.ubicacionMapaFiltros.direccion = results[1].formatted_address;
            console.log(results[1])

            this.ofertaNueva.UBICACION.DIRECCION = results[1].formatted_address;

            //obtenemos la ubicacion separada en posiciones del array(localidad,ciudad,departamento,pais)
            let arrayUbicacion = results[1].formatted_address.split(',');
            arrayUbicacion = arrayUbicacion.reverse();
            console.log(arrayUbicacion)

            this.asignarUbicacionArray(arrayUbicacion);

            this.direccionAsginada = true;

            //obtenemos el codigo postal de la pension u apartamento
            for (var i = 0; i < results[1].address_components.length; i++) {

              let type = results[1].address_components[i].types;

              if (type.indexOf("postal_code") != -1) {

                this.ofertaNueva.UBICACION.CODIGO_POSTAL = results[1].address_components[i].long_name;
                //console.log('Codigo Postal: ' + codigoPostalPublicar);
              }
            }

            console.log(this.ofertaNueva.UBICACION)

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

          this.ubicacionMapaFiltros.lat = place.geometry.location.lat();
          this.ubicacionMapaFiltros.lng = place.geometry.location.lng();

          this.coordPension.lat = this.ubicacionMapaFiltros.lat;
          this.coordPension.lng = this.ubicacionMapaFiltros.lng;

          this.ubicacionMapaFiltros.zoom = 16;
          this.ubicacionMapaFiltros.direccion = place.formatted_address;
          this.obtenerDireccion({ coords: { lat: this.coordPension.lat, lng: this.coordPension.lng } })

        });
      });

    }
    );

  }


  asignarUbicacionArray(arrayUbicacion: Array<any>) {

    //pasando los datos a la variable que contiene los datos de la nueva oferta
    //teniendo en cuenta la exactitud de la ubicacion proporcionada
    let exactitud = arrayUbicacion.length;
    switch (exactitud) {
      case 1:
        this.ofertaNueva.UBICACION.PAIS = arrayUbicacion[0].trim().toUpperCase();
        break;
      case 2:
        this.ofertaNueva.UBICACION.PAIS = arrayUbicacion[0].trim().toUpperCase();
        this.ofertaNueva.UBICACION.DEPARTAMENTO = arrayUbicacion[1].trim().toUpperCase();
        break;
      case 3:
        this.ofertaNueva.UBICACION.CIUDAD = arrayUbicacion[2].trim().toUpperCase();
        this.ofertaNueva.UBICACION.DEPARTAMENTO = arrayUbicacion[1].trim().toUpperCase();
        this.ofertaNueva.UBICACION.PAIS = arrayUbicacion[0].trim().toUpperCase();
        break;
      case 4:
        this.ofertaNueva.UBICACION.LOCALIDAD = arrayUbicacion[3].trim().toUpperCase();
        this.ofertaNueva.UBICACION.CIUDAD = arrayUbicacion[2].trim().toUpperCase();
        this.ofertaNueva.UBICACION.DEPARTAMENTO = arrayUbicacion[1].trim().toUpperCase();
        this.ofertaNueva.UBICACION.PAIS = arrayUbicacion[0].trim().toUpperCase();
        break;
      default:
        if (exactitud > 4) {
          this.ofertaNueva.UBICACION.LOCALIDAD = arrayUbicacion[3].trim().toUpperCase();
          this.ofertaNueva.UBICACION.CIUDAD = arrayUbicacion[2].trim().toUpperCase();
          this.ofertaNueva.UBICACION.DEPARTAMENTO = arrayUbicacion[1].trim().toUpperCase();
          this.ofertaNueva.UBICACION.PAIS = arrayUbicacion[0].trim().toUpperCase();
        }
        break;
    }
  }

  resetUbicacion() {
    this.ofertaNueva.UBICACION = {
      PAIS: "",
      DEPARTAMENTO: "",
      CIUDAD: "",
      LOCALIDAD: "",
      DIRECCION: "",
      CODIGO_POSTAL: ""
    }
  }


  //funciones para controlar los valores de habitaciones disponibles, 
  //hanitaciones individuale y compartidas, realizando las respectivas validaciones
  //para el correcto mantenimiento de cantidades, para que no sobre ni falten valores
  aumentarHabitaciones() {

    if (this.habitacionesDisponibles < 10) {
      this.habitacionesDisponibles++;
    }

    //this.maxPorAsignar = 0;

    /*if(this.habitacionesDisponibles > (this.cantCompartidas + this.cantIndividuales)){
      this.cantIndividuales += (this.habitacionesDisponibles - (this.cantCompartidas + this.cantIndividuales));
    }*/


  }

  disminuirHabitaciones() {

    if (this.habitacionesDisponibles > 1) {
      this.habitacionesDisponibles--;
    }

    /*
    this.maxPorAsignar = 0;

    if(this.habitacionesDisponibles < (this.cantCompartidas + this.cantIndividuales)){
      
      if(this.cantIndividuales > 0){
        this.cantIndividuales -= ((this.cantCompartidas + this.cantIndividuales) - this.habitacionesDisponibles);
      }
      else if(this.cantCompartidas > 0){
        this.cantCompartidas -= ((this.cantCompartidas + this.cantIndividuales) - this.habitacionesDisponibles);
      }
      
    }*/

    if (this.habitacioneBanioInterno > this.habitacionesDisponibles) {
      this.habitacioneBanioInterno = this.habitacionesDisponibles;
    }

  }

  aumentarCantIndividuales() {

    //&&  this.maxPorAsignar > 0
    if (this.cantIndividuales < this.habitacionesDisponibles) {
      this.cantIndividuales++;
      //this.maxPorAsignar--;
    }
  }

  disminuirCantIndividuales() {

    // &&  this.maxPorAsignar < this.habitacionesDisponibles
    if (this.cantIndividuales > 0) {
      this.cantIndividuales--;
      //this.cantCompartidas++;
      //this.maxPorAsignar++;
    }
  }

  aumentarCantCompartidas() {

    //&&  this.maxPorAsignar > 0
    if (this.cantCompartidas < this.habitacionesDisponibles) {
      this.cantCompartidas++;
      //this.maxPorAsignar--;
    }
  }

  disminuirCantCompartidas() {

    //&&  this.maxPorAsignar < this.habitacionesDisponibles
    if (this.cantCompartidas > 0) {
      this.cantCompartidas--;
      //this.cantIndividuales++;
      //this.maxPorAsignar++;
    }
  }

  aumentarHabitacioneBanioInterno() {
    if (this.habitacioneBanioInterno < this.habitacionesDisponibles) {
      this.habitacioneBanioInterno++;
    }
  }

  disminuirHabitacioneBanioInterno() {
    if (this.habitacioneBanioInterno > 0) {
      this.habitacioneBanioInterno--;
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

  //carga de imagen principal
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (evento) => { // called once readAsDataURL is completed
        this.urlImagenPrincipal = reader.result.toString();
        this.ofertaNueva.FOTOS['imgPrincipal'] = event.target.files[0];
        this.imagenPrincipalAgregada = true;
      }
    }
  }

  //carga de imagenes secundarias
  onSelectFileSecond(event, indImage) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (evento) => { // called once readAsDataURL is completed
        this.urlImagenes[indImage] = reader.result.toString();
        this.ofertaNueva.FOTOS["img" + indImage] = event.target.files[0];
        this.imagenPrincipalAgregada = true;
      }
    }
  }

  //obtener servicios especificos
  serviciosEspecificosSeleccionados() {

    let serviciosEspecificos = this.servicios.filter(element => {
      return element.CHECKED == true;
    });

    let serviciosEspecificosId = [];
    serviciosEspecificos.forEach(element => {
      serviciosEspecificosId.push(element.ID);
    });

    return serviciosEspecificosId;
  }

  //obtener normas de la casa 
  normasCasaSeleccionadas() {

    let normasCasa = this.reglasCasa.filter(element => {
      return element.CHECKED == 'SI';
    });

    let normasCasaId = [];
    normasCasa.forEach(element => {
      normasCasaId.push(element.ID);
    });

    return normasCasaId;
  }

  //almacenando datos de los radio buttons
  onChangeAlimentacionIncluida(obj: any) {

    this.radioAlimentacion = obj.children[0].value;
  }

  onChangeGenerosAdmitidos(obj: any) {

    this.radioGeneroAdmitido = obj.children[0].value;
  }

  onChangeTipoHabitacion(obj: any) {

    this.radioTipoHabitacion = obj.children[0].value;

    if (this.radioTipoHabitacion == 'INDIVIDUAL') {
      this.cantIndividuales = 1;
      this.cantCompartidas = 0;
    } else {
      this.cantIndividuales = 0;
      this.cantCompartidas = 1;
    }

  }

  guardar() {

    //para protegernos de descripciones o titulos mas largas de lo permitido
    if (this.regExp.descripcion.test(this.descripcion) && this.regExp.titulo.test(this.titulo)
      && this.imagenPrincipalAgregada && this.direccionAsginada) {

      //para mas de una habitacion
      if (this.habitacionesDisponibles > 1) {

        //no concuerdan el numero dehabitaciones
        if (this.habitacionesDisponibles != (this.cantCompartidas + this.cantIndividuales)) {
          console.log('publicar Pension submit, no concuerdan el numero dehabitaciones')
          //no concuerdan el numero dehabitaciones
          this.datosIncorrectos = true;
        }
        else {
          //Datos correctos
          this.datosIncorrectos = false;
        }
      }
      else {
        this.datosIncorrectos = false;
      }

      if (!this.datosIncorrectos) {
        console.log('publicar Pension submit')

        //obteniendo los datos de la oferta
        this.ofertaNueva.HABITACIONES_DISPONIBLES = this.habitacionesDisponibles;
        this.ofertaNueva.HABITACIONES_INDIVIDUALES = this.cantIndividuales;
        this.ofertaNueva.HABITACIONES_COMPARTIDAS = this.cantCompartidas;
        this.ofertaNueva.NUM_HABITANTES = this.nroHabitantes;
        this.ofertaNueva.HABITACIONES_BANIO_INTERNO = this.habitacioneBanioInterno;
        this.ofertaNueva.GENERO_ADMITIDO = this.radioGeneroAdmitido;
        this.ofertaNueva.ALIMENTACION_INCLUIDA = ((this.radioAlimentacion == 'SI') ? 1 : 0);
        this.ofertaNueva.PRECIO_MENSUAL = this.precio;
        this.ofertaNueva.NUM_CELULAR = this.celular;
        this.ofertaNueva.TITULO_AVISO = this.titulo;
        this.ofertaNueva.DESCRIPCION_AVISO = this.descripcion;
        this.ofertaNueva.SERVICIOS_ESPECIFICOS = this.serviciosEspecificosSeleccionados();
        this.ofertaNueva.NORMAS_CASA = this.normasCasaSeleccionadas();

        //Usuario con sesion activa
        if (this.usuarioService.datos != null) {
          this.ofertaNueva.USUARIO_ID = this.usuarioService.datos.ID;

          /*this.ofertaHabitacionService.publicarHabitacion(this.ofertaNueva).subscribe((res: { ofertasHabitacion: { ID } }) => {

            //Mensaje de felicidades por publicar articulo
            this.padreRutaOferta = "/ofertasHabitacion/" + res.ofertasHabitacion.ID;
            this.padreMsjPublicacion = "Felicidades, se ha publicado tu oferta."
            this.padrePublicado = true;
            this.btnMensajePublicarModal.nativeElement.click();

            //reseteamos variables
            this.resetVariables();

          }, err => {

            console.log('error, no se ha publicado tu oferta')
            console.log(err);

            //Mensaje de error al publicar oferta
            this.padreMsjPublicacion = "Estamos presentando inconvenientes para publicar tu oferta en este momento, intentalo nuevamente. Si el problema persiste no dudes en contáctarnos";

            this.padrePublicado = false;
            this.btnMensajePublicarModal.nativeElement.click();

          });*/

        }//No ha iniciado sesion
        else {
          //invitamos a iniciar sesion o registrarse antes de publicar
          this.btnInicioSesionModal.nativeElement.click();
        }


        console.log(this.ofertaNueva);
        this.datosIncorrectos = false;
      }

    }
    else {
      console.log('publicar Pension submit invalido')
      //Faltan datos requeridos para publicar el articulo
      this.datosIncorrectos = true;
    }
  }

}
