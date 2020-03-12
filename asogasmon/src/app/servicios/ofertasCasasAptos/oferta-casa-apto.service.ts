import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CasaApto } from 'src/app/core/interfaces/casa-apto';
import { DatosBusquedaInmuebles } from 'src/app/core/interfaces/datos-busqueda-inmuebles';

@Injectable({
  providedIn: 'root'
})
export class OfertaCasaAptoService {
  API_URL = "http://localhost/asogasmonAPI/public/api/";
 
  constructor(private httpClient: HttpClient) { }

  //públicar casaApto
  publicarCasaApto(casaApto: CasaApto) {

    // read file as data url
    const formData = new FormData();

    //datos basicos de la casaApto
    formData.append('tipoInmueble', casaApto.TIPO_INMUEBLE);
    formData.append('numHabitaciones', casaApto.NUM_HABITACIONES.toString());
    formData.append('numBanios', casaApto.NUM_BANIOS.toString());
    formData.append('areaInmueble', casaApto.AREA_INMUEBLE.toString());
    formData.append('estanciaMinima', casaApto.ESTANCIA_MINIMA.toString());
    formData.append(
      'serviciosPrincipales', casaApto.SERVICIOS_PRINCIPALES.toString()
    );
    formData.append('amoblada', casaApto.AMOBLADA.toString());
    formData.append('precio', casaApto.PRECIO_MENSUAL.toString());
    formData.append('celular', casaApto.NUMERO_CELULAR.toString());
    formData.append('descripcion', casaApto.DESCRIPCION.toString());
    formData.append('tituloAviso', casaApto.TITULO_AVISO.toString());
    formData.append('usuario', casaApto.USUARIO_ID.toString());


    //datos de ubicacion
    formData.append('pais', casaApto.UBICACION.PAIS);//latitud longitud
    formData.append('latitud', casaApto.UBICACION.LATITUD.toString());
    formData.append('longitud', casaApto.UBICACION.LONGITUD.toString());

    if (casaApto.UBICACION.DEPARTAMENTO.trim() != '')
      formData.append('departamento', casaApto.UBICACION.DEPARTAMENTO);

    if (casaApto.UBICACION.CIUDAD.trim() != '')
      formData.append('ciudad', casaApto.UBICACION.CIUDAD);

    if (casaApto.UBICACION.LOCALIDAD.trim() != '')
      formData.append('localidad', casaApto.UBICACION.LOCALIDAD);

    if (casaApto.UBICACION.DIRECCION.trim() != '')
      formData.append('direccion', casaApto.UBICACION.DIRECCION);

    if (casaApto.UBICACION.CODIGO_POSTAL.trim() != '')
      formData.append('codigoPostal', casaApto.UBICACION.CODIGO_POSTAL);

    //fotos
    let i = 0;
    //obteniendo fotos del arreglo
    for (const key in casaApto.FOTOS) {
      formData.append('foto' + i, casaApto.FOTOS[key]);
      i++;
    }
    //cantidad de fotos
    formData.append('cantImg', i.toString());

    //servicios especificos
    let x = 0;
    //obteniendo servicios especificos del arreglo
    for (const key in casaApto.SERVICIOS_ESPECIFICOS) {

      formData.append(
        'servicioEspecifico' + x,
        casaApto.SERVICIOS_ESPECIFICOS[key].toString()
      );
      x++;

    }
    //cantidad de servicios especificos
    formData.append('cantServicios', x.toString());

    return this.httpClient.post(this.API_URL + "ofertaCasaApto", formData);
  }

  buscarCasasAptos(datosBusqueda: DatosBusquedaInmuebles) {
    let datos:any = {};
    
    datos.cantOfertasPorPagina = datosBusqueda.cantOfertasPorPagina;
    datos.paginacionActual = datosBusqueda.paginacionActual;
    datos.precioMaximo = datosBusqueda.precioMaximo;
    datos.pais = datosBusqueda.ubicacion.pais;

    if (datosBusqueda.ubicacion.departamento.trim() != '')
      datos.departamento = datosBusqueda.ubicacion.departamento;

    if (datosBusqueda.ubicacion.ciudad.trim() != '')
      datos.ciudad = datosBusqueda.ubicacion.ciudad;

    //usaremos el codigo postal solo para hacer busquedas en localidades o direcciones exactas
    if (datosBusqueda.ubicacion.localidad.trim() != '')
      datos.codigoPostal = datosBusqueda.ubicacion.codigoPostal;
      

    console.log(datos)
    return this.httpClient.post(this.API_URL + 'ofertaCasaApto/apartamentos', datos);
  }

  obtenerCasaApto(id:number){
    
    return this.httpClient.get(this.API_URL + 'ofertaCasaApto/'+id);
  }
 
}
