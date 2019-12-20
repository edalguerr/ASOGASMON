import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pension } from 'src/app/interfaces/pension';
import { DatosBusquedaInmuebles } from 'src/app/interfaces/datos-busqueda-inmuebles';

@Injectable({
  providedIn: 'root'
})
export class OfertasPensionService {

  API_URL = "http://localhost/asogasmonAPI/public/api/";

  constructor(private httpClient: HttpClient) { }

  //públicar pension
  publicarPension(pension: Pension) {

    // read file as data url
    const formData = new FormData();

    //datos basicos de la pension
    formData.append('habitacionesDisponibles', pension.HABITACIONES_DISPONIBLES.toString());
    formData.append('habitacionesIndividuales', pension.HABITACIONES_INDIVIDUALES.toString());
    formData.append('habitacionesCompartidas', pension.HABITACIONES_COMPARTIDAS.toString());
    formData.append('numHabitantes', pension.NUM_HABITANTES.toString());
    formData.append('habitacionesBanioInterno', pension.HABITACIONES_BANIO_INTERNO.toString());
    formData.append('genero', pension.GENERO_ADMITIDO);
    formData.append('alimentacion', pension.ALIMENTACION_INCLUIDA.toString());
    formData.append('precio', pension.PRECIO_MENSUAL.toString());
    formData.append('celular', pension.NUM_CELULAR.toString());
    formData.append('tituloAviso', pension.TITULO_AVISO);
    formData.append('descripcion', pension.DESCRIPCION_AVISO);
    formData.append('usuario', pension.USUARIO_ID.toString());


    //datos de ubicacion
    formData.append('pais', pension.UBICACION.PAIS);
    formData.append('latitud', pension.UBICACION.LATITUD.toString());
    formData.append('longitud', pension.UBICACION.LONGITUD.toString());

    if (pension.UBICACION.DEPARTAMENTO.trim() != '')
      formData.append('departamento', pension.UBICACION.DEPARTAMENTO);

    if (pension.UBICACION.CIUDAD.trim() != '')
      formData.append('ciudad', pension.UBICACION.CIUDAD);

    if (pension.UBICACION.LOCALIDAD.trim() != '')
      formData.append('localidad', pension.UBICACION.LOCALIDAD);

    if (pension.UBICACION.DIRECCION.trim() != '')
      formData.append('direccion', pension.UBICACION.DIRECCION);

    if (pension.UBICACION.CODIGO_POSTAL.trim() != '')
      formData.append('codigoPostal', pension.UBICACION.CODIGO_POSTAL);

    //fotos
    let i = 0;
    //obteniendo fotos del arreglo
    for (const key in pension.FOTOS) {
      formData.append('foto' + i, pension.FOTOS[key]);
      i++;
    }
    //cantidad de fotos
    formData.append('cantImg', i.toString());

    //servicios especificos
    let x = 0;
    //obteniendo servicios especificos del arreglo
    for (const key in pension.SERVICIOS_ESPECIFICOS) {

      formData.append(
        'servicioEspecifico' + x,
        pension.SERVICIOS_ESPECIFICOS[key].toString()
      );
      x++;

    }
    //cantidad de servicios especificos
    formData.append('cantServicios', x.toString());

    //normas casa
    let y = 0;
    //obteniendo normas de la casa del arreglo
    for (const key in pension.NORMAS_CASA) {

      formData.append(
        'normaCasa' + y,
        pension.NORMAS_CASA[key].toString()
      );
      y++;

    }
    //cantidad de servicios especificos
    formData.append('cantNormas', y.toString());

    return this.httpClient.post(this.API_URL + "ofertaPension", formData);
  }

  buscarPension(datosBusqueda: DatosBusquedaInmuebles) {
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
    return this.httpClient.post(this.API_URL + 'ofertaPension/pensiones', datos);
  }
  
}
