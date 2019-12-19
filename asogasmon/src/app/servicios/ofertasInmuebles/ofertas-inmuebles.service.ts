import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class OfertasInmueblesService {
  ofertas:Array<{ID, CIUDAD, PRECIO_MENSUAL, DIRECCION, LATITUD, LONGITUD}> = [];
  fotosOfertas:Array<{FOTO}> = [];
  cantTotal = 0;
  paginacion = 1;
  private paginacion$ = new Subject<number>();

  
  constructor() { }

  actualizarPaginacionActual(pagina){
    this.paginacion = pagina;
    this.paginacion$.next(this.paginacion);
  }

  getPaginacion():Observable<number>{
    return this.paginacion$.asObservable();
  }

}
