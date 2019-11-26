import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NormasCasaService {
  API_URL = "http://localhost/asogasmonAPI/public/api/";
  normasCasa:Array<{ID, NORMA}> = null;

  constructor(private httpClient: HttpClient) { }
  
  //obtiene todas las normas de la casa
  getNormasCasa() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(
      this.API_URL + "normasCasa", { headers: headers }
    );
  }

}
