export interface CasaApto {

    TIPO_INMUEBLE: string;
    NUM_HABITACIONES: number;
    NUM_BANIOS: number;
    AREA_INMUEBLE: number;
    ESTANCIA_MINIMA: number;
    SERVICIOS_PRINCIPALES: number;
    AMOBLADA: number;
    PRECIO_MENSUAL: number;
    NUMERO_CELULAR: number;
    DESCRIPCION: string;
    TITULO_AVISO: string;
    USUARIO_ID: number;
    UBICACION: {
        PAIS: string,
        DEPARTAMENTO: string,
        CIUDAD: string,
        LOCALIDAD: string,
        DIRECCION: string,
        CODIGO_POSTAL: string
    };
    FOTOS: Array<File>;
    SERVICIOS_ESPECIFICOS: Array<number>;

}
