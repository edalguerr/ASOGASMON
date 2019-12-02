import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Habitacion } from 'src/app/interfaces/habitacion';

@Injectable({
  providedIn: 'root'
})
export class OfertaHabitacionService {

  API_URL = "http://localhost/asogasmonAPI/public/api/";

  constructor(private httpClient: HttpClient) { }

  //públicar habitacion
  publicarHabitacion(habitacion: Habitacion) {

    // read file as data url
    const formData = new FormData();

    //datos basicos de la habitacion
    formData.append('amoblada', habitacion.AMOBLADA.toString());
    formData.append('tipoHabitacion', habitacion.TIPO_HABITACION);
    formData.append('banioInterno', habitacion.BANIO_INTERNO.toString());
    formData.append('genero', habitacion.GENERO_ADMITIDO.toString());
    formData.append('alimentacion', habitacion.ALIMENTACION_INCLUIDA.toString());
    formData.append('area', habitacion.AREA_INMUEBLE.toString());
    formData.append('estanciaMinima', habitacion.ESTANCIA_MINIMA.toString());
    formData.append('numHabitantes', habitacion.NUM_HABITANTES.toString());
    formData.append('celular', habitacion.NUMERO_CELULAR.toString());
    formData.append('precio', habitacion.PRECIO_MENSUAL.toString());
    formData.append('tituloAviso', habitacion.TITULO_AVISO);
    formData.append('descripcion', habitacion.DESCRIPCION);
    formData.append('usuario', habitacion.USUARIO_ID.toString());


    //datos de ubicacion
    formData.append('pais', habitacion.UBICACION.PAIS);
    formData.append('latitud', habitacion.UBICACION.LATITUD.toString());
    formData.append('longitud', habitacion.UBICACION.LONGITUD.toString());

    if (habitacion.UBICACION.DEPARTAMENTO.trim() != '')
      formData.append('departamento', habitacion.UBICACION.DEPARTAMENTO);

    if (habitacion.UBICACION.CIUDAD.trim() != '')
      formData.append('ciudad', habitacion.UBICACION.CIUDAD);

    if (habitacion.UBICACION.LOCALIDAD.trim() != '')
      formData.append('localidad', habitacion.UBICACION.LOCALIDAD);

    if (habitacion.UBICACION.DIRECCION.trim() != '')
      formData.append('direccion', habitacion.UBICACION.DIRECCION);

    if (habitacion.UBICACION.CODIGO_POSTAL.trim() != '')
      formData.append('codigoPostal', habitacion.UBICACION.CODIGO_POSTAL);

    //fotos
    let i = 0;
    //obteniendo fotos del arreglo
    for (const key in habitacion.FOTOS) {
      formData.append('foto' + i, habitacion.FOTOS[key]);
      i++;
    }
    //cantidad de fotos
    formData.append('cantImg', i.toString());

    //servicios especificos
    let x = 0;
    //obteniendo servicios especificos del arreglo
    for (const key in habitacion.SERVICIOS_ESPECIFICOS) {

      formData.append(
        'servicioEspecifico' + x,
        habitacion.SERVICIOS_ESPECIFICOS[key].toString()
      );
      x++;

    }
    //cantidad de servicios especificos
    formData.append('cantServicios', x.toString());

    //normas casa
    let y = 0;
    //obteniendo normas de la casa del arreglo
    for (const key in habitacion.NORMAS_CASA) {

      formData.append(
        'normaCasa' + y,
        habitacion.NORMAS_CASA[key].toString()
      );
      y++;

    }
    //cantidad de servicios especificos
    formData.append('cantNormas', y.toString());

    return this.httpClient.post(this.API_URL + "ofertaHabitacion", formData);
  }

}
