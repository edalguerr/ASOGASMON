export interface Pension {
    
    HABITACIONES_DISPONIBLES:number;
    HABITACIONES_INDIVIDUALES:number;
    HABITACIONES_COMPARTIDAS:number;
    NUM_HABITANTES:number;
    HABITACIONES_BANIO_INTERNO:number;
    GENERO_ADMITIDO:string;
    ALIMENTACION_INCLUIDA:number;
    PRECIO_MENSUAL:number;
    NUM_CELULAR:number;
    TITULO_AVISO:string;
    DESCRIPCION_AVISO:string;
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
