import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URL = "http://localhost/asogasmonAPI/public/api/";
  datos: Usuario = null;


  constructor(private httpClient: HttpClient) {

  }

  getDatos(usuario: { email, contrasenia }) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(this.API_URL + "signin", usuario, { headers: headers });
  }

  getDatosToken(token: any) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(this.API_URL + "signin", { id_token: token }, { headers: headers });
  }

  registrarUsuario(usuario: { email, contrasenia, nombre, apellidos }) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(this.API_URL + "login", usuario, { headers: headers });
  }

  actualizarDatos(usuario: { email, nombre, apellidos, id }) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.put(this.API_URL + "login/" + usuario.id, usuario, { headers: headers });
  }

  reestablecerContraseniaEmail(usuario: { email }) {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(this.API_URL + "signin/resetPass", usuario, { headers: headers });
  }

  reestablecerContrasenia(usuario: { email, contrasenia, token }) {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(this.API_URL + "signin/update", usuario, { headers: headers });
  }

  actualizarFoto(usuario: { id, foto:File }) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    const formData = new FormData();
    formData.append('foto', usuario.foto); // read file as data url
    formData.append('id', ''+usuario.id);
    
    return this.httpClient.post(this.API_URL + "signin/updateAvatar", formData);
  }

}


