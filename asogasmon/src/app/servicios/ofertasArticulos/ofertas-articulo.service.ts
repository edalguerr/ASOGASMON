import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articulo } from 'src/app/interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class OfertasArticuloService {
  API_URL = "http://localhost/asogasmonAPI/public/api/";

  constructor(private httpClient: HttpClient) { }

  publicarArticulo(articulo: Articulo) {

    // read file as data url
    const formData = new FormData();

    //datos basicos del articulo
    formData.append('descripcion', articulo.DESCRIPCION);
    formData.append('precio', articulo.PRECIO.toString());
    formData.append('celular', articulo.NUMERO_CELULAR.toString());
    formData.append('titulo', articulo.TITULO_AVISO);
    formData.append('usuario', articulo.USUARIO_ID.toString());
    formData.append('subCategoria', articulo.SUB_CATEGORIA_ID.toString());

    //datos de ubicacion
    formData.append('pais', articulo.UBICACION.PAIS);

    if (articulo.UBICACION.DEPARTAMENTO.trim() != '')
      formData.append('departamento', articulo.UBICACION.DEPARTAMENTO);

    if (articulo.UBICACION.CIUDAD.trim() != '')
      formData.append('ciudad', articulo.UBICACION.CIUDAD);

    if (articulo.UBICACION.LOCALIDAD.trim() != '')
      formData.append('localidad', articulo.UBICACION.LOCALIDAD);

    //fotos
    let i = 0;
    //obteniendo fotos del arreglo
    for (const key in articulo.FOTOS) {
      formData.append('foto'+i, articulo.FOTOS[key]);
      i++;
    }
    //cantidad de fotos
    formData.append('cantImg', i.toString());
    

    return this.httpClient.post(this.API_URL + "ofertaArticulo", formData);
  }

  //obtiene todas las categorias con sus sun¿bcategorias correspondientes
  categoriasArticulo() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(this.API_URL + "categoriasArticulo", { headers: headers });
  }

}
