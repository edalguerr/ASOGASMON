import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URL = "http://localhost/asogasmonAPI/public/api/";
  datos:Usuario = null;
  

  constructor(private httpClient:HttpClient) { 
    
  }

  getDatos(usuario:{email,contrasenia}) {
   let headers = new HttpHeaders().set('Content-Type','application/json');
   
   return this.httpClient.post(this.API_URL+"signin",usuario,{headers: headers});
  }
  
  getDatosToken(token:any) {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this.httpClient.post(this.API_URL+"signin",{id_token:token},{headers: headers});
  }

}


