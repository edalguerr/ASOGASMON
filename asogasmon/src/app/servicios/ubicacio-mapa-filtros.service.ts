import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UbicacioMapaFiltrosService {
  lat:number = 4.69855158983652;;
  lng:number = -74.07194335937498;
  codigoPostal = "";
  dirreccionBuscada:boolean = false;
  zoom = 12;
  direccion;

  constructor() { }
}
