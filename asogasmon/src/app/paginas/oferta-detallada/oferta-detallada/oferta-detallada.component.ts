import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SlideOfertaDetalladaComponent } from './componentes/slide-oferta-detallada/slide-oferta-detallada.component';
import { ActivatedRoute, Router } from '@angular/router';

import { OfertaCasaAptoService } from 'src/app/servicios/ofertasCasasAptos/oferta-casa-apto.service';
import { OfertaDetalladaActualService } from 'src/app/servicios/ofertaDetalladaActual/oferta-detallada-actual.service';
import { OfertaDetallada } from 'src/app/core/interfaces/oferta-detallada';
import { OfertaHabitacionService } from 'src/app/servicios/ofertasHabitaciones/oferta-habitacion.service';
import { OfertasPensionService } from 'src/app/servicios/ofertasPensiones/ofertas-pension.service';

@Component({
  selector: 'app-oferta-detallada',
  templateUrl: './oferta-detallada.component.html',
  styleUrls: ['./oferta-detallada.component.css']
})
export class OfertaDetalladaComponent implements OnInit, AfterViewInit {
  
  @ViewChild('slideImagenesOferta',{static:false}) slideImagenesOferta:SlideOfertaDetalladaComponent;

  isOrdenador = false;
  widthMobile = 992;
  width = window.innerWidth; // ancho del navegador
  ruta:string = "assets/";
  imagen = "179809-OWKTX6-319.jpg";
  imagenes:Array<string> = ['B7111-BL_BATA_UPC_ml.jpg','libro-de-oro-de-matemticas-1-638.jpg',
  'habitacion-arriendo_2.jpg', '1024o.jpg'];

  numeroCelularPrueba = '3106022481';
  esMyAnuncio = false;

  precio = 2000000;
  idOferta = 1;

  constructor(
    private activateRoute:ActivatedRoute, 
    private router:Router,
    public ofertaDetalladaActualService:OfertaDetalladaActualService,
    private ofertaCasaAptoService:OfertaCasaAptoService,
    private ofertaHabitacionService:OfertaHabitacionService,
    private ofertaPensionService:OfertasPensionService
    ) {
    
    let paramRoute = this.activateRoute.snapshot.params.id;
    console.log(paramRoute)

    //verificamos que el parametro id de la oferta sea numerico
    //en caso de no serlo, redireccionamos a la pagina principal
    if(!parseInt(paramRoute)){
      this.router.navigateByUrl(`/`);
    }
    
    paramRoute =   parseInt(paramRoute);
    this.idOferta = paramRoute;

    /*Para tablets grandes */
    if(this.width > this.widthMobile){
      this.isOrdenador = true;  
    }

  }

  ngOnInit() {
   
    this.obtenerOferta();
    
  }

  ngAfterViewInit(){
    this.slideImagenesOferta.emitEvent.subscribe((res)=>{
      this.imagen = res;
    })
  }

  obtenerOferta(){

    this.reestablecerOferta();

    let categoria = this.activateRoute.parent.snapshot.url[0].path;
        
    if (categoria == 'ofertasCasaApto') {
      this.obtenerOfertaCasaApto();
    }
    else if (categoria == 'ofertasHabitacion') {
      this.obtenerOfertaHabitacion();
    }
    else {
      this.obtenerOfertaPension();
    }

  }

  obtenerOfertaCasaApto(){

    this.ofertaCasaAptoService.obtenerCasaApto(this.idOferta).subscribe(
      (res:{ ofertasCasaApto }) => {

        console.log(res.ofertasCasaApto)
        this.ofertaDetalladaActualService.ofertaDetallada.ID = res.ofertasCasaApto.ID;
        this.ofertaDetalladaActualService.ofertaDetallada.INMUEBLE = res.ofertasCasaApto.INMUEBLE;
        this.ofertaDetalladaActualService.ofertaDetallada.TIPO_INMUEBLE = res.ofertasCasaApto.TIPO_INMUEBLE;
        this.ofertaDetalladaActualService.ofertaDetallada.NUM_HABITACIONES = res.ofertasCasaApto.NUM_HABITACIONES;
        this.ofertaDetalladaActualService.ofertaDetallada.NUM_BANIOS = res.ofertasCasaApto.NUM_BANIOS;
        this.ofertaDetalladaActualService.ofertaDetallada.AREA_INMUEBLE = res.ofertasCasaApto.AREA_INMUEBLE;
        this.ofertaDetalladaActualService.ofertaDetallada.ESTANCIA_MINIMA = res.ofertasCasaApto.ESTANCIA_MINIMA;
        this.ofertaDetalladaActualService.ofertaDetallada.SERVICIOS_PRINCIPALES = res.ofertasCasaApto.SERVICIOS_PRINCIPALES;
        this.ofertaDetalladaActualService.ofertaDetallada.AMOBLADA = res.ofertasCasaApto.AMOBLADA;
        this.ofertaDetalladaActualService.ofertaDetallada.PRECIO_MENSUAL = res.ofertasCasaApto.PRECIO_MENSUAL;
        this.ofertaDetalladaActualService.ofertaDetallada.NUMERO_CELULAR = res.ofertasCasaApto.NUMERO_CELULAR;
        this.ofertaDetalladaActualService.ofertaDetallada.DESCRIPCION = res.ofertasCasaApto.DESCRIPCION;
        this.ofertaDetalladaActualService.ofertaDetallada.TITULO_AVISO = res.ofertasCasaApto.TITULO_AVISO;
        this.ofertaDetalladaActualService.ofertaDetallada.USUARIO_ID = res.ofertasCasaApto.USUARIO_ID;
        this.ofertaDetalladaActualService.ofertaDetallada.usuario.NOMBRE = res.ofertasCasaApto.usuario.NOMBRE;
        this.ofertaDetalladaActualService.ofertaDetallada.usuario.APELLIDOS = res.ofertasCasaApto.usuario.APELLIDOS;
        this.ofertaDetalladaActualService.ofertaDetallada.usuario.EMAIL = res.ofertasCasaApto.usuario.EMAIL;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.ID =  res.ofertasCasaApto.ubicacion.ID;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.PAIS =  res.ofertasCasaApto.ubicacion.PAIS;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.DEPARTAMENTO =  res.ofertasCasaApto.ubicacion.DEPARTAMENTO;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.CIUDAD =  res.ofertasCasaApto.ubicacion.CIUDAD;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.LOCALIDAD =  res.ofertasCasaApto.ubicacion.LOCALIDAD;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.DIRECCION =  res.ofertasCasaApto.ubicacion.DIRECCION;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.CODIGO_POSTAL =  res.ofertasCasaApto.ubicacion.CODIGO_POSTAL;
        this.ofertaDetalladaActualService.ofertaDetallada.servicios_especificos = res.ofertasCasaApto.servicios_especificos;
        this.ofertaDetalladaActualService.ofertaDetallada.fotos = res.ofertasCasaApto.fotos;
        
        console.log(this.ofertaDetalladaActualService.ofertaDetallada)
      },
      err => {
        console.log("Error al obtener la oferta")
        console.log(err)
      }
    )

  }

  obtenerOfertaHabitacion(){

    this.ofertaHabitacionService.obtenerHabitacion(this.idOferta).subscribe(
      (res:{ ofertasHabitacion }) => {

        console.log(res.ofertasHabitacion)
        this.ofertaDetalladaActualService.ofertaDetallada.ID = res.ofertasHabitacion.ID;
        this.ofertaDetalladaActualService.ofertaDetallada.INMUEBLE = res.ofertasHabitacion.INMUEBLE;
        this.ofertaDetalladaActualService.ofertaDetallada.AMOBLADA = res.ofertasHabitacion.AMOBLADA;
        this.ofertaDetalladaActualService.ofertaDetallada.BANIO_INTERNO = res.ofertasHabitacion.BANIO_INTERNO;
        this.ofertaDetalladaActualService.ofertaDetallada.GENERO_ADMITIDO = res.ofertasHabitacion.GENERO_ADMITIDO;
        this.ofertaDetalladaActualService.ofertaDetallada.ALIMENTACION_INCLUIDA = res.ofertasHabitacion.ALIMENTACION_INCLUIDA;
        this.ofertaDetalladaActualService.ofertaDetallada.AREA_INMUEBLE = res.ofertasHabitacion.AREA_INMUEBLE;
        this.ofertaDetalladaActualService.ofertaDetallada.ESTANCIA_MINIMA = res.ofertasHabitacion.ESTANCIA_MINIMA;
        this.ofertaDetalladaActualService.ofertaDetallada.NUM_HABITANTES = res.ofertasHabitacion.NUM_HABITANTES;
        this.ofertaDetalladaActualService.ofertaDetallada.NUMERO_CELULAR = res.ofertasHabitacion.NUMERO_CELULAR;
        this.ofertaDetalladaActualService.ofertaDetallada.PRECIO_MENSUAL = res.ofertasHabitacion.PRECIO_MENSUAL;
        this.ofertaDetalladaActualService.ofertaDetallada.TITULO_AVISO = res.ofertasHabitacion.TITULO_AVISO;
        this.ofertaDetalladaActualService.ofertaDetallada.DESCRIPCION = res.ofertasHabitacion.DESCRIPCION;
        this.ofertaDetalladaActualService.ofertaDetallada.USUARIO_ID = res.ofertasHabitacion.USUARIO_ID;
        
        this.ofertaDetalladaActualService.ofertaDetallada.usuario.NOMBRE = res.ofertasHabitacion.usuario.NOMBRE;
        this.ofertaDetalladaActualService.ofertaDetallada.usuario.APELLIDOS = res.ofertasHabitacion.usuario.APELLIDOS;
        this.ofertaDetalladaActualService.ofertaDetallada.usuario.EMAIL = res.ofertasHabitacion.usuario.EMAIL;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.ID =  res.ofertasHabitacion.ubicacion.ID;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.PAIS =  res.ofertasHabitacion.ubicacion.PAIS;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.DEPARTAMENTO =  res.ofertasHabitacion.ubicacion.DEPARTAMENTO;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.CIUDAD =  res.ofertasHabitacion.ubicacion.CIUDAD;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.LOCALIDAD =  res.ofertasHabitacion.ubicacion.LOCALIDAD;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.DIRECCION =  res.ofertasHabitacion.ubicacion.DIRECCION;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.CODIGO_POSTAL =  res.ofertasHabitacion.ubicacion.CODIGO_POSTAL;
        this.ofertaDetalladaActualService.ofertaDetallada.servicios_especificos = res.ofertasHabitacion.servicios_especificos;
        this.ofertaDetalladaActualService.ofertaDetallada.fotos = res.ofertasHabitacion.fotos;
        this.ofertaDetalladaActualService.ofertaDetallada.normasCasa = res.ofertasHabitacion.normas_casa;
        
        console.log(this.ofertaDetalladaActualService.ofertaDetallada)
      },
      err => {
        console.log("Error al obtener la oferta")
        console.log(err)
      }
    )

  }

  obtenerOfertaPension(){

    this.ofertaPensionService.obtenerPension(this.idOferta).subscribe(
      (res:{ ofertasPension }) => {

        console.log(res.ofertasPension)
        this.ofertaDetalladaActualService.ofertaDetallada.ID = res.ofertasPension.ID;
        this.ofertaDetalladaActualService.ofertaDetallada.INMUEBLE = res.ofertasPension.INMUEBLE;
        this.ofertaDetalladaActualService.ofertaDetallada.HABITACIONES_DISPONIBLES = res.ofertasPension.HABITACIONES_DISPONIBLES;
        this.ofertaDetalladaActualService.ofertaDetallada.HABITACIONES_INDIVIDUALES = res.ofertasPension.HABITACIONES_INDIVIDUALES;
        this.ofertaDetalladaActualService.ofertaDetallada.HABITACIONES_COMPARTIDAS = res.ofertasPension.HABITACIONES_COMPARTIDAS;
        this.ofertaDetalladaActualService.ofertaDetallada.NUM_HABITANTES = res.ofertasPension.NUM_HABITANTES;
        this.ofertaDetalladaActualService.ofertaDetallada.BANIO_INTERNO = res.ofertasPension.HABITACIONES_BANIO_INTERNO;
        this.ofertaDetalladaActualService.ofertaDetallada.GENERO_ADMITIDO = res.ofertasPension.GENERO_ADMITIDO;
        this.ofertaDetalladaActualService.ofertaDetallada.ALIMENTACION_INCLUIDA = res.ofertasPension.ALIMENTACION_INCLUIDA;
        this.ofertaDetalladaActualService.ofertaDetallada.PRECIO_MENSUAL = res.ofertasPension.PRECIO_MENSUAL;
        this.ofertaDetalladaActualService.ofertaDetallada.NUMERO_CELULAR = res.ofertasPension.NUM_CELULAR;
        this.ofertaDetalladaActualService.ofertaDetallada.TITULO_AVISO = res.ofertasPension.TITULO_AVISO;
        this.ofertaDetalladaActualService.ofertaDetallada.DESCRIPCION = res.ofertasPension.DESCRIPCION_AVISO;
        this.ofertaDetalladaActualService.ofertaDetallada.USUARIO_ID = res.ofertasPension.USUARIO_ID;      
        
        this.ofertaDetalladaActualService.ofertaDetallada.usuario.NOMBRE = res.ofertasPension.usuario.NOMBRE;
        this.ofertaDetalladaActualService.ofertaDetallada.usuario.APELLIDOS = res.ofertasPension.usuario.APELLIDOS;
        this.ofertaDetalladaActualService.ofertaDetallada.usuario.EMAIL = res.ofertasPension.usuario.EMAIL;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.ID =  res.ofertasPension.ubicacion.ID;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.PAIS =  res.ofertasPension.ubicacion.PAIS;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.DEPARTAMENTO =  res.ofertasPension.ubicacion.DEPARTAMENTO;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.CIUDAD =  res.ofertasPension.ubicacion.CIUDAD;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.LOCALIDAD =  res.ofertasPension.ubicacion.LOCALIDAD;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.DIRECCION =  res.ofertasPension.ubicacion.DIRECCION;
        this.ofertaDetalladaActualService.ofertaDetallada.ubicacion.CODIGO_POSTAL =  res.ofertasPension.ubicacion.CODIGO_POSTAL;
        this.ofertaDetalladaActualService.ofertaDetallada.servicios_especificos = res.ofertasPension.servicios_especificos;
        this.ofertaDetalladaActualService.ofertaDetallada.fotos = res.ofertasPension.fotos;
        this.ofertaDetalladaActualService.ofertaDetallada.normasCasa = res.ofertasPension.normas_casa;
        
        console.log(this.ofertaDetalladaActualService.ofertaDetallada)
      },
      err => {
        console.log("Error al obtener la oferta")
        console.log(err)
      }
    )

  }

  reestablecerOferta(){

    this.ofertaDetalladaActualService.ofertaDetallada = {
      ID: 0, //CASAAPTO
      INMUEBLE: "",
      TIPO_INMUEBLE: "",
      NUM_HABITACIONES: 0,
      NUM_BANIOS: 0,
      AREA_INMUEBLE: 0,
      ESTANCIA_MINIMA: 0,
      SERVICIOS_PRINCIPALES: 0,
      AMOBLADA: 0,
      PRECIO_MENSUAL: 0,
      NUMERO_CELULAR: 0,
      DESCRIPCION: "",
      TITULO_AVISO: "",
      USUARIO_ID: 0,
      
      TIPO_HABITACION: "",//HABITACION
      BANIO_INTERNO: 0,
      GENERO_ADMITIDO: 0,
      ALIMENTACION_INCLUIDA: 0,    
      NUM_HABITANTES: 0,
  
      HABITACIONES_DISPONIBLES: 0, //PENSION
      HABITACIONES_INDIVIDUALES: 0,
      HABITACIONES_COMPARTIDAS: 0,
      HABITACIONES_BANIO_INTERNO: 0,
       
      usuario:{
        ID: 0,
        NOMBRE: "",
        APELLIDOS: "",
        EMAIL: ""
      },
      ubicacion:{
        ID: 0,
        PAIS: "",
        DEPARTAMENTO: "",
        CIUDAD: "",
        LOCALIDAD: "",
        DIRECCION: "",
        CODIGO_POSTAL: 0
      },
      servicios_especificos: [],
      fotos: [],
      normasCasa: []
    }

  }

}
