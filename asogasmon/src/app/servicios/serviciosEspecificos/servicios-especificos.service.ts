import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEspecificosService {
  API_URL = "http://localhost/asogasmonAPI/public/api/";
  serviciosEspecificos:Array<{id, servicio, icono}> = null;

  constructor(private httpClient: HttpClient) { }

  //obtiene todas los servicios especificos
  getServiciosEspecificos() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(
      this.API_URL + "serviciosEspecificos", { headers: headers }
    );
  }

}
