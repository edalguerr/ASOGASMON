import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertasInmueblesService {
  ofertas:Array<{ID, CIUDAD, PRECIO_MENSUAL, DIRECCION, LATITUD, LONGITUD}> = [];
  fotosOfertas:Array<{FOTO}> = [];
  cantTotal = 0;
  
  constructor() { }
}
