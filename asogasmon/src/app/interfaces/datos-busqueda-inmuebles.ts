export interface DatosBusquedaInmuebles {

    cantOfertasPorPagina:number;
    paginacionActual:number;
    precioMaximo: number;
    ubicacion: {
        pais: string,
        departamento: string,
        ciudad: string,
        localidad: string,
        codigoPostal: string
    }

}
