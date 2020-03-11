import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosBusquedaInmuebles } from 'src/app/core/interfaces/datos-busqueda-inmuebles';

@Injectable({
  providedIn: 'root'
})
export class UltimasOfertasService {

  API_URL = "http://localhost/asogasmonAPI/public/api/";

  constructor(private httpClient: HttpClient) { }

  obtenerOfertas(datosBusqueda: DatosBusquedaInmuebles) {
    let datos:any = {};
    
    datos.cantOfertasPorPagina = datosBusqueda.cantOfertasPorPagina;
    datos.paginacionActual = datosBusqueda.paginacionActual;
    datos.precioMaximo = 2000000;
   
    console.log(datos)
    return this.httpClient.post(this.API_URL + 'ultimasOfertas', datos);
  }
}
