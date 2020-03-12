import { Injectable } from '@angular/core';
import { OfertaDetallada } from 'src/app/core/interfaces/oferta-detallada';

@Injectable({
  providedIn: 'root'
})
export class OfertaDetalladaActualService {

  ofertaDetallada:OfertaDetallada = {
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

  fotosOfertas1:Array<{FOTO}> = [];
  fotosOfertas2:Array<{FOTO}> = [];

  imgPrincipalActual = "";

  constructor() { }
}
