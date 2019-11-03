import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfertasArticuloService {
  API_URL = "http://localhost/asogasmonAPI/public/api/";

  constructor(private httpClient: HttpClient) { }

  publicarArticulo(usuario: { id, foto:File }) {
    
    
    const formData = new FormData();
    formData.append('foto', usuario.foto); // read file as data url
    formData.append('id', ''+usuario.id);
    
    return this.httpClient.post(this.API_URL + "ofertaArticulo", formData);
  }

  //obtiene todas las categorias con sus sun¿bcategorias correspondientes
  categoriasArticulo(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(this.API_URL + "categoriasArticulo", {headers: headers});
  }

}
