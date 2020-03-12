export interface OfertaDetallada {

    ID; //CASAAPTO
    INMUEBLE;
    TIPO_INMUEBLE;
    NUM_HABITACIONES; 
    NUM_BANIOS;
    AREA_INMUEBLE;
    ESTANCIA_MINIMA;
    SERVICIOS_PRINCIPALES;
    AMOBLADA;
    PRECIO_MENSUAL;
    NUMERO_CELULAR;
    DESCRIPCION;
    TITULO_AVISO;
    USUARIO_ID;
    
    TIPO_HABITACION;//HABITACION
    BANIO_INTERNO;
    GENERO_ADMITIDO;
    ALIMENTACION_INCLUIDA;    
    NUM_HABITANTES;

    HABITACIONES_DISPONIBLES; //PENSION
    HABITACIONES_INDIVIDUALES;
    HABITACIONES_COMPARTIDAS;
    HABITACIONES_BANIO_INTERNO;
      
    usuario:{
      ID,
      NOMBRE,
      APELLIDOS,
      EMAIL
    };
    ubicacion:{
      ID,
      PAIS,
      DEPARTAMENTO,
      CIUDAD,
      LOCALIDAD,
      DIRECCION,
      CODIGO_POSTAL
    };
    servicios_especificos: Array<{
      ID, 
      SERVICIO, 
      ICONO
    }>;
    fotos: Array<{
      ID, 
      FOTO, 
      OFERTA_CASA_APTO_ID
    }>;
    normasCasa: Array<{
      NORMA
    }>;
}
