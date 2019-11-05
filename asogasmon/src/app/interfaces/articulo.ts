export interface Articulo {
    
    DESCRIPCION:string;
    PRECIO:number;
    NUMERO_CELULAR:number;
    TITULO_AVISO:string;
    USUARIO_ID:number;
    SUB_CATEGORIA_ID:number;
    UBICACION:{
        PAIS:string,
        DEPARTAMENTO:string,
        CIUDAD:string,
        LOCALIDAD:string
    },
    FOTOS:Array<File>

}
