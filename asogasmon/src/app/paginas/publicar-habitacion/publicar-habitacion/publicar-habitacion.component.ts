import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';
import { MapaEstaticoComponent } from 'src/app/compartidos/componentes/mapa-estatico/mapa-estatico.component';
import { ServiciosEspecificosService } from 'src/app/servicios/serviciosEspecificos/servicios-especificos.service';
import { NormasCasaService } from 'src/app/servicios/nomasCasa/normas-casa.service';
import { Habitacion } from 'src/app/core/interfaces/habitacion';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { OfertaHabitacionService } from 'src/app/servicios/ofertasHabitaciones/oferta-habitacion.service';

@Component({
  selector: 'app-publicar-habitacion',
  templateUrl: './publicar-habitacion.component.html',
  styleUrls: ['./publicar-habitacion.component.css']
})

export class PublicarHabitacionComponent implements OnInit, AfterViewInit {

  @ViewChild('search',{static:false}) public searchElement: ElementRef;
  @ViewChild('mapaEstaticoComponent',{static:false}) mapaEstaticoComponent: MapaEstaticoComponent;
  @ViewChild('btnInicioSesionModal',{static:false}) btnInicioSesionModal: ElementRef;
  @ViewChild('btnMensajePublicarModal',{static:false}) btnMensajePublicarModal: ElementRef;

  //ubicacion y configuracion del mapa
  coordPension = { lat: 4.69855158983652, lng: -74.07194335937498 };
  draggable = true;
  fullScreenMapa = false;
  streetViewControl = false;
  minZoom = 10;
  iconoPrecio = false;
  textPrecio = false;

  //datos a enviar al componente mensaje publicacion
  padreMsjPublicacion = "";
  padrePublicado = false;
  padreRutaOferta = "/ofertasHabitacion/1";

  geocoder;
 
  //variables de control
  minDimensionInmueble = 0;
  maxHabitantes = 12;
  minHabitantes = 0;
  urlImagenPrincipal = '';
  urlImagenes = ["", "", "", "", "", ""];
  rutaImagenes = "assets/";
  imagenPrincipalAgregada = false;
  direccionAsginada = false;
  datosIncorrectos = false;
  maxCaracteresTitulo = 70;
  maxCaracteresDescripcion = 300;
  clasesBase = 'fa fa-servicios';


  reglasCasa: Array<{ ID: any, NORMA: any, CHECKED: any  }> = [];
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
  nroHabitantes = 1;
  dimensionInmueble = 20;
  titulo;
  descripcion;
  precio;
  celular;
  estanciaMinima = 0;

  radioAmoblada = 'AMOBLADA';
  radioTipoHabitacion = 'INDIVIDUAL';
  radioBanioInterno = 'NO';
  radioAlimentacion = 'SI';
  radioGeneroAdmitido = 'TODOS';

  ofertaNueva: Habitacion = {
    AMOBLADA: 0,
    TIPO_HABITACION: '',
    BANIO_INTERNO: 0,
    GENERO_ADMITIDO: '',
    ALIMENTACION_INCLUIDA: 0,
    AREA_INMUEBLE: 0,
    ESTANCIA_MINIMA: 0,
    NUM_HABITANTES: 0,
    NUMERO_CELULAR: 0,
    PRECIO_MENSUAL: 0,
    TITULO_AVISO: '',
    DESCRIPCION: '',
    USUARIO_ID: 0,
    UBICACION: {
      PAIS: '',
      DEPARTAMENTO: '',
      CIUDAD: '',
      LOCALIDAD: '',
      DIRECCION: '',
      CODIGO_POSTAL: '',
      LATITUD: 0,
      LONGITUD: 0
    },
    FOTOS: [],
    SERVICIOS_ESPECIFICOS: [],
    NORMAS_CASA: []
  };

  constructor(
    public ubicacionMapaFiltros: UbicacioMapaFiltrosService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private serviciosEspecificos: ServiciosEspecificosService,
    private normasCasaService: NormasCasaService,
    private usuarioService:UsuarioService,
    private ofertaHabitacionService:OfertaHabitacionService
  ) { }

  ngOnInit() {

    this.getLocation();
    
    //Cargando servicios especificos
    this.getServiciosEspecificos();

    //Cargando normas de la casa
    this.getNormasCasa();

  }

  ngAfterViewInit(){

    this.inicializarAutocompletado();

    //recibimos los cambios de direccion del componente mapa
    this.mapaEstaticoComponent.emitEventDragEndHouse.subscribe((res: { dirAsignada, data: any }) => {
      this.direccionAsginada = res.dirAsignada;
      this.obtenerDireccion(res.data);
      console.log("Emitido direccion asignada")
    })
    
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

            this.reglasCasa.push({CHECKED:false, ...element});
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

        this.reglasCasa.push({CHECKED:false, ...element});
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
            this.ofertaNueva.UBICACION.LATITUD = data.coords.lat;
            this.ofertaNueva.UBICACION.LONGITUD = data.coords.lng;

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
      CODIGO_POSTAL: "",
      LATITUD: 0,
      LONGITUD: 0
    }
  }


  onChangeDimensionInmueble() {
    if (this.dimensionInmueble < this.minDimensionInmueble) {
      this.dimensionInmueble = this.minDimensionInmueble;
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

  //almacenando datos de los radio buttons
  onChangeAmoblada(obj: any) {

    this.radioAmoblada = obj.children[0].value;
  }

  onChangeTipoHabitacion(obj: any) {

    this.radioTipoHabitacion = obj.children[0].value;
  }

  onChangeBanioInterno(obj: any) {

    this.radioBanioInterno = obj.children[0].value;
  }

  onChangeAlimentacionIncluida(obj: any) {

    this.radioAlimentacion = obj.children[0].value;
  }

  onChangeGenerosAdmitidos(obj: any) {

    this.radioGeneroAdmitido = obj.children[0].value;    
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
  
 
  guardar() {

    //para protegernos de descripciones o titulos mas largas de lo permitido
    if (this.regExp.descripcion.test(this.descripcion) && this.regExp.titulo.test(this.titulo)
      && this.imagenPrincipalAgregada && this.direccionAsginada) {

      console.log('publicar Habitación submit')

      //obteniendo los datos de la oferta
      this.ofertaNueva.AMOBLADA = ((this.radioAmoblada == 'AMOBLADA') ? 1 : 0);
      this.ofertaNueva.TIPO_HABITACION = this.radioTipoHabitacion;
      this.ofertaNueva.BANIO_INTERNO = ((this.radioBanioInterno == 'SI') ? 1 : 0);
      this.ofertaNueva.GENERO_ADMITIDO = this.radioGeneroAdmitido;
      this.ofertaNueva.ALIMENTACION_INCLUIDA = ((this.radioAlimentacion == 'SI') ? 1 : 0);
      this.ofertaNueva.AREA_INMUEBLE = this.dimensionInmueble;
      this.ofertaNueva.ESTANCIA_MINIMA = this.estanciaMinima;
      this.ofertaNueva.NUM_HABITANTES = this.nroHabitantes;
      this.ofertaNueva.PRECIO_MENSUAL = this.precio;
      this.ofertaNueva.NUMERO_CELULAR = this.celular;
      this.ofertaNueva.TITULO_AVISO = this.titulo;
      this.ofertaNueva.DESCRIPCION = this.descripcion;
      this.ofertaNueva.SERVICIOS_ESPECIFICOS = this.serviciosEspecificosSeleccionados();
      this.ofertaNueva.NORMAS_CASA = this.normasCasaSeleccionadas();

      //Usuario con sesion activa
      if (this.usuarioService.datos != null) {
        this.ofertaNueva.USUARIO_ID = this.usuarioService.datos.ID;

        this.ofertaHabitacionService.publicarHabitacion(this.ofertaNueva).subscribe((res: { ofertasHabitacion: { ID } }) => {

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

        });

      }//No ha iniciado sesion
      else {
        //invitamos a iniciar sesion o registrarse antes de publicar
        this.btnInicioSesionModal.nativeElement.click();
      } 

      console.log(this.ofertaNueva);
      this.datosIncorrectos = false;
    }
    else {
      console.log('publicar Habitación submit invalido')
      //Faltan datos requeridos para publicar el articulo
      this.datosIncorrectos = true;
    }

  }
 
  //variables por defecto para publicar articulo nuevo
  resetVariables() {
    this.ofertaNueva = {
      PRECIO_MENSUAL: 0,
      DESCRIPCION: "",
      TITULO_AVISO: "",
      FOTOS: [],
      ...this.ofertaNueva
    }

    this.datosIncorrectos = false;
    this.imagenPrincipalAgregada = false;
    this.titulo = "";
    this.descripcion = "";
    this.precio = "";

    this.urlImagenPrincipal = '';
    this.urlImagenes = ["", "", "", "", "", ""];

  }
 
}
