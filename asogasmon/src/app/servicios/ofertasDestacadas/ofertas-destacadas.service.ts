import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosBusquedaInmuebles } from 'src/app/core/interfaces/datos-busqueda-inmuebles';

@Injectable({
  providedIn: 'root'
})
export class OfertasDestacadasService {

  API_URL = "http://localhost/asogasmonAPI/public/api/";

  constructor(private httpClient: HttpClient) { }

  obtenerOfertas(datosBusqueda: DatosBusquedaInmuebles) {
    let datos:any = {};
    
    datos.cantOfertasPorPagina = datosBusqueda.cantOfertasPorPagina;
    datos.paginacionActual = datosBusqueda.paginacionActual;
   
    console.log(datos)
    return this.httpClient.post(this.API_URL + 'ofertasDestacadas', datos);
  }
  
}
