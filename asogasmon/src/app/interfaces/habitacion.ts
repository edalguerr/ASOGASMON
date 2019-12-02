export interface Habitacion {

    AMOBLADA:number;
    TIPO_HABITACION:string;
    BANIO_INTERNO:number;
    GENERO_ADMITIDO:string;
    ALIMENTACION_INCLUIDA:number;
    AREA_INMUEBLE:number;
    ESTANCIA_MINIMA:number;
    NUM_HABITANTES:number;
    NUMERO_CELULAR:number;
    PRECIO_MENSUAL:number;
    TITULO_AVISO:string;
    DESCRIPCION:string;
    USUARIO_ID:number;
    UBICACION: {
        PAIS: string,
        DEPARTAMENTO: string,
        CIUDAD: string,
        LOCALIDAD: string,
        DIRECCION: string,
        CODIGO_POSTAL: string,
        LATITUD: number,
        LONGITUD: number
    };
    FOTOS: Array<File>;
    SERVICIOS_ESPECIFICOS: Array<number>;
    NORMAS_CASA: Array<number>;

}

