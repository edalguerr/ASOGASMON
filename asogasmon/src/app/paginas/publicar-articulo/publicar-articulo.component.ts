import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';

@Component({
  selector: 'app-publicar-articulo',
  templateUrl: './publicar-articulo.component.html',
  styleUrls: ['./publicar-articulo.component.css']
})

export class PublicarArticuloComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef; 
  

  selectedDate;
  
  direccionActual = 'San josé de los campanos av. principal calle #66c-34b';
 
  geocoder;
  coordPension:{lat, lng} = {lat :4.69855158983652, lng:-74.07194335937498};
  

  urlImagenPrincipal = '';
  urlImagenes = [ "", "", "", ""];
  rutaImagenes = "assets/";
  imagenPrincipalAgregada = false;
  direccionAsginada = false;

  categoriaOtros = 'Otro';
  categoriaAsignada = false;

  categorias:Array<{icono:any, nombre:any, subCategorias:Array<{icono:any, nombre:any}>}> = [
    {icono:'fa fa-snowflake fa-servicios', nombre:'Libros', subCategorias:[
      {icono:'fa fa-snowflake fa-servicios', nombre:'Matematicas'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Informatica'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Literatura'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Idiomas'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Diccionarios'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Electronica'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Quimica'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Fisica'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Ingenieria'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Medicina'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Enfermeria'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Biologia'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Derecho'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Ciencias economicas'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Ciencias sociales'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Arquitectura'},          
      {icono:'fa fa-snowflake fa-servicios', nombre:'Filosofia'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Psicologia'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Etica y religion'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Medio ambiente'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Musica'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Arte'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Otro'}
    ]},
    {icono:'fa fa-warehouse fa-servicios', nombre:'Vestibles', subCategorias:[
      {icono:'fa fa-snowflake fa-servicios', nombre:'Uniformes'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Batas'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Literatura'}
    ]},
    {icono:'fa fa-user-shield fa-servicios', nombre:'Electronica', subCategorias:[
      {icono:'fa fa-snowflake fa-servicios', nombre:'Matematicas'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Programación'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Literatura'}
    ]},
    {icono:'fa fa-umbrella-beach fa-servicios', nombre:'Instrumentos', subCategorias:[
      {icono:'fa fa-snowflake fa-servicios', nombre:'Matematicas'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Programación'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Literatura'}
    ]},
    {icono:'fa fa-ascensor fa-servicios', nombre:'Utiles', subCategorias:[
      {icono:'fa fa-snowflake fa-servicios', nombre:'Cuadernos'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Lapices'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Literatura'}
    ]},
    {icono:'fa fa-ascensor fa-servicios', nombre:'Servicios', subCategorias:[
      {icono:'fa fa-snowflake fa-servicios', nombre:'Clases'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Tutorias'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Cursos'},
      {icono:'fa fa-snowflake fa-servicios', nombre:'Asesorias'}
    ]},
    {icono:'fa fa-ascensor fa-servicios', nombre:'Otro', subCategorias:[]}
    
  ];
 
  
  //opciones de autocompletado
  opcionesAutocompletado:google.maps.places.AutocompleteOptions = {
    types: ['(regions)'],//limita la busqueda a regiones, ciudades y otros,
    componentRestrictions: {//limita las busquedas a solo colombia
      country: ['co']
    }
  };


  maxCaracteresTitulo = 70;
  maxCaracteresDescripcion = 300;

  regExp = {
    tamInmueble: "\\d{1,10}",
    celular: "\\d{10}",
    precio: "\\d{1,15}",
    tituloReg: ".{0," + this.maxCaracteresTitulo + "}",
    titulo: new RegExp(".{0," + this.maxCaracteresTitulo + "}"),
    descripcion: new RegExp(".{0," + this.maxCaracteresDescripcion + "}")
  }

  titulo;
  descripcion;

  constructor(public ubicacionMapaFiltros:UbicacioMapaFiltrosService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    
    this.inicializarAutocompletado();
  }


  inicializarAutocompletado(){

    //verificar que se pueda minimo pais+departamento
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, this.opcionesAutocompletado);

      //inicializando el componente cuando cargue el mapa
      this.geocoder = new google.maps.Geocoder;

      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
       
 
          if(place.geometry === undefined || place.geometry === null ){
            this.direccionAsginada = false;
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
          for (var i = 0; i < place.address_components.length; i++){
  
            let type = place.address_components[i].types;
              
            if (type.indexOf("postal_code") != -1){
              
              //si es para publicar almacenamos el codigo postal
              //si estamos buscando, usamos el codigo postal para hacer una consulta
              //a la base de datos y actualizar
              if(this.ubicacionMapaFiltros.codigoPostal != place.address_components[i].long_name){
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
    && this.imagenPrincipalAgregada && this.direccionAsginada && this.categoriaAsignada) {
      
      console.log('publicar Articulos submit')
    }
    else {
      console.log('publicar Articulos submit invalido')
    }
    
  }

  asignarCategoria(categoria){

    console.log("categoria: ");
    console.log(categoria);
    if(categoria == this.categoriaOtros){
      this.categoriaAsignada = true;
    }
  }

  asignarSubCategoria(subcategoria){

    console.log("Subcategoria: ");
    console.log(subcategoria);
    this.categoriaAsignada = true;
  }
  
}
