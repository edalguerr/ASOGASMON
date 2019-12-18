import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css']
})
export class ListaServiciosComponent implements OnInit {


  servicios:Array<{icono:any, nombre:any}> = [
    {icono:'fa fa-wifi fa-servicios' , nombre: 'Wifi'},
    {icono:'fa fa-snowflake fa-servicios', nombre:'Aire acondicionado'},
    {icono:'fa fa-warehouse fa-servicios', nombre:'Parqueadero'},
    {icono:'fa fa-tv fa-servicios', nombre:'TV'},
    {icono:'fa fa-tshirt fa-servicios', nombre:'Lavada'},
    {icono:'fa fa-utensils fa-servicios', nombre:'Alimentacion'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
