import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';
import { OfertasArticuloService } from 'src/app/servicios/ofertasArticulos/ofertas-articulo.service';
import { Articulo } from 'src/app/interfaces/articulo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-publicar-articulo',
  templateUrl: './publicar-articulo.component.html',
  styleUrls: ['./publicar-articulo.component.css']
})

export class PublicarArticuloComponent implements OnInit {

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('formPublicarArticulo') formPublicarArticulo: ElementRef;
  
  geocoder;

  urlImagenPrincipal = '';
  urlImagenes = ["", "", "", ""];
  rutaImagenes = "assets/";
  imagenPrincipalAgregada = false;
  direccionAsginada = false;
  datosIncorrectos = false;

  categoriaOtros = 'OTROS'; 
  categoriaAsignada = false;

  //clases base para todos los iconos de las categorias
  clasesBase = 'fa fa-servicios';

  categoriasA: Array<{}> = [];

  //opciones de autocompletado
  opcionesAutocompletado: google.maps.places.AutocompleteOptions = {
    types: ['(regions)'],//limita la busqueda a regiones, ciudades y otros,
    componentRestrictions: {//limita las busquedas a solo colombia
      country: ['co']
    }
  };

  //caracteres maximos para el titulo y la descripción
  maxCaracteresTitulo = 70;
  maxCaracteresDescripcion = 300;

  //expresione regulares para los formularios
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

  articuloNuevo: Articulo = {
    DESCRIPCION: '',
    PRECIO: 0,
    NUMERO_CELULAR: 0,
    TITULO_AVISO: '',
    USUARIO_ID: 0,
    SUB_CATEGORIA_ID: 0,
    UBICACION: {
      PAIS: '',
      DEPARTAMENTO: '',
      CIUDAD: '',
      LOCALIDAD: ''
    },
    FOTOS: new Array()
  };

  constructor(public ubicacionMapaFiltros: UbicacioMapaFiltrosService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private ofertasArticulo: OfertasArticuloService, private usuarioService:UsuarioService) {

    //obteniendo categorias y subcategorias de articulos
    this.ofertasArticulo.categoriasArticulo().subscribe((res: { categorias: Array<{}> }) => {

      this.categoriasA = res.categorias;

    }, error => {
      console.log('error al obtener las categorias')
      console.log(Error);
    })

  }

  ngOnInit() {

    this.inicializarAutocompletado();
  }


  //autocompletado de ubicación
  inicializarAutocompletado() {

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, this.opcionesAutocompletado);

      //inicializando el componente cuando cargue el mapa
      this.geocoder = new google.maps.Geocoder;

      //este metodo se ejecutara cada que se elija una ubicacion del autocompletado
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          
          //asignamos valores por defecto, cada vez que cambia de ubicacion 
          //para no tener datos de la ubicacion anterior en caso que la nueva ubicacion
          //tenga menos precision
          this.articuloNuevo.UBICACION = {
            PAIS: '',
            DEPARTAMENTO: '',
            CIUDAD: '',
            LOCALIDAD: ''
          }

          //verificamos que se haya elegido una ubicacion del autocompletado
          if (place.geometry === undefined || place.geometry === null) {
            this.direccionAsginada = false;
            return;
          }
          
          this.ubicacionMapaFiltros.direccion = place.formatted_address;

          //obtenemos la ubicacion separada en posiciones del array(localidad,ciudad,departamento,pais)
          let arrayUbicacion = place.formatted_address.split(',');
          
          //pasando los datos a la variable que contiene los datos del nuevo articulo
          //teniendo en cuenta la exactitud de la ubicacion proporcionada
          let exactitud = arrayUbicacion.length;
          switch (exactitud) {
            case 1:
              this.articuloNuevo.UBICACION.PAIS = arrayUbicacion[0].trim().toUpperCase();
              break;
            case 2:
              this.articuloNuevo.UBICACION.DEPARTAMENTO = arrayUbicacion[0].trim().toUpperCase();
              this.articuloNuevo.UBICACION.PAIS = arrayUbicacion[1].trim().toUpperCase();
              break;
            case 3:
              this.articuloNuevo.UBICACION.CIUDAD = arrayUbicacion[0].trim().toUpperCase();
              this.articuloNuevo.UBICACION.DEPARTAMENTO = arrayUbicacion[1].trim().toUpperCase();
              this.articuloNuevo.UBICACION.PAIS = arrayUbicacion[2].trim().toUpperCase();
              break;
            case 4:
              this.articuloNuevo.UBICACION.LOCALIDAD = arrayUbicacion[0].trim().toUpperCase();
              this.articuloNuevo.UBICACION.CIUDAD = arrayUbicacion[1].trim().toUpperCase();
              this.articuloNuevo.UBICACION.DEPARTAMENTO = arrayUbicacion[2].trim().toUpperCase();
              this.articuloNuevo.UBICACION.PAIS = arrayUbicacion[3].trim().toUpperCase();
              break;

          }

          this.direccionAsginada = true;

        });
      });

    }
    );

  }

  //carga de imagen principal
  //esta opcion funciona bien para cargar imagenes
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (evento) => { // called once readAsDataURL is completed
        this.urlImagenPrincipal = reader.result.toString();
        this.articuloNuevo.FOTOS['imgPrincipal'] = event.target.files[0];
        this.imagenPrincipalAgregada = true;
      }
    }
  }

  //carga de imagenes complementarias
  onSelectFileSecond(event, indImage) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (evento) => { // called once readAsDataURL is completed
        this.urlImagenes[indImage] = reader.result.toString();
        this.articuloNuevo.FOTOS["img"+indImage] = event.target.files[0];
        this.imagenPrincipalAgregada = true;
      }
    }
  }

  //Asigna las categoria Otros, esta no tiene subcategorias
  asignarCategoria(categoria) {
    
    if (categoria.NOMBRE == this.categoriaOtros) {
      this.categoriaAsignada = true;

      //Asigna sub categoria otros; esta sub categoria es solo para la categoria otros
      this.articuloNuevo.SUB_CATEGORIA_ID = categoria.sub_categorias[0].ID;
    }
  }

  //Asigna subcategoria seleccionada, con su respectiva categoria
  asignarSubCategoria(subcategoria) {

    this.categoriaAsignada = true;
    this.articuloNuevo.SUB_CATEGORIA_ID = subcategoria.ID;
  }

  guardar() {

    
    //para protegernos de descripciones o titulos mas largas de lo permitido, verificar que se haya asignado una
    //ubicacion, una categoria y minimo una imagen del articulo
    if (this.regExp.descripcion.test(this.descripcion) && this.regExp.titulo.test(this.titulo)
      && this.imagenPrincipalAgregada && this.direccionAsginada && this.categoriaAsignada) {
      
      //POR HACER:
      //VERIFICAR QUE EL USUARIO HAYA INICIADO SESION, DE LO CONTRARIO INVITARLO A HACERLO PARA PODER CONTINUAR
      //CON SU PUBLICACION

      this.articuloNuevo.TITULO_AVISO = this.titulo;
      this.articuloNuevo.DESCRIPCION = this.descripcion;
      this.articuloNuevo.PRECIO = this.formPublicarArticulo.nativeElement[9].value;
      this.articuloNuevo.NUMERO_CELULAR = this.formPublicarArticulo.nativeElement[10].value;

      //USUARIO CON SESION ACTIVA
      if(this.usuarioService.datos != null){
        this.articuloNuevo.USUARIO_ID = this.usuarioService.datos.ID;
        this.ofertasArticulo.publicarArticulo(this.articuloNuevo).subscribe(res => {
          console.log('Publicación de articulo realizada')
          console.log(res);

        }, err => {
          console.log('error, no se ha publicado tu articulo')
          console.log(err);

        });

      }//NO HA INICIADO SESION
      else{

      }

      
      this.datosIncorrectos = false;
      console.log('publicar Articulos submit')
      console.log(this.articuloNuevo);
    }
    else {
      console.log('publicar Articulos submit invalido')
      this.datosIncorrectos = true;
    }

  }

}
