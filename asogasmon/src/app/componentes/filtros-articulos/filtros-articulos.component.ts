import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({ 
  selector: 'app-filtros-articulos',
  templateUrl: './filtros-articulos.component.html',
  styleUrls: ['./filtros-articulos.component.css']
})
export class FiltrosArticulosComponent implements OnInit {

  @ViewChild('search',{static:false}) public searchElement: ElementRef;

  categorias:Array<{clase:string, nombre:string}> = [
    {clase:'fa-book', nombre:'Libros'},
    {clase:'fa-flask', nombre:'Laboratorio'},
    {clase:'fa-graduation-cap', nombre:'Uniformes'},
    {clase:'fa-desktop', nombre:'Informatica'},
    {clase:'fa-pencil', nombre:'Utiles'},
    {clase:'fa-wrench', nombre:'Herramientas'},
  ];

  categorias2:Array<{clase:string, nombre:string}> = [
    {clase:'fa-filter', nombre:'Laboratorios'},
    {clase:'fa-stethoscope', nombre:'Medicina'},
    {clase:'fa-calculator', nombre:'calculadora'},
    {clase:'fa-headphones', nombre:'Electronicos'},
    {clase:'fa-suitcase', nombre:'bolsos'},
    {clase:'fa-balance-scale', nombre:'Pesos y balanzas'},
  ];

  slider = document.getElementById("myRange");
  precio:any = 2000000;


  value: number = 2000000;
  valueAnterior = this.value;

  options: Options = {
    floor: 0,
    ceil: 2000000,
    //ticksArray: [0,250000 ,500000, 750000, 1000000, 1250000, 1500000, 1750000, 2000000],
    step:10000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Precio maximo:</b> $' + value;
        default:
          return '$' + value;
      }
    },
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      return '#efab7c';//'#2AE02A';
    },
    getPointerColor: (value: number): string => {  
    return '#0db9f0';//'#2AE02A';
    }
  };

  //opciones de autocompletado
  opcionesAutocompletado:google.maps.places.AutocompleteOptions = {
    types: ['(regions)'],//limita la busqueda a regiones, ciudades y otros
    componentRestrictions: {//limita las busquedas a solo colombia
      country: ['co']
    }
  };

  precioBocadilloFiltroMostrar = false;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { 

    
  }

  ngOnInit() {
    this.inicializarAutocompletado();
  }
  
  actualizar(value){
    this.precio = value;
  }

  inicializarAutocompletado(){

    //verificar que se pueda minimo pais+departamento
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement,this.opcionesAutocompletado);

    }
    ); 

  }

  MostrarBocadilloFiltro(){
    this.valueAnterior = this.value;
    this.precioBocadilloFiltroMostrar = !this.precioBocadilloFiltroMostrar;
  }
 
  mantenerPrecio(){
    this.value = this.valueAnterior;
    this.precioBocadilloFiltroMostrar = false;
  }

  actualizarPrecio(){
    this.valueAnterior = this.value;
    this.precioBocadilloFiltroMostrar = false;
  }

}
