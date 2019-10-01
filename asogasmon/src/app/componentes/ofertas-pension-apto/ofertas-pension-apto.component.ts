import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas-pension-apto',
  templateUrl: './ofertas-pension-apto.component.html',
  styleUrls: ['./ofertas-pension-apto.component.css']
})
export class OfertasPensionAptoComponent implements OnInit {

  ruta:string = "assets/"; 
  imagenes:Array<string> = ['2015-05-07_23-04-35.jpg',
  'Mini_Protoboard_170_puntos_1.jpg',  'libro-de-oro-de-matemticas-1-638.jpg',
  '179809-OWKTX6-319.jpg', 'B7111-BL_BATA_UPC_ml.jpg', 
  , '00106652174191____1__640x640.jpg',  'bd18ca0af17b52d6278d74ec3ea0b769-product.jpg'
  
  ];

  ofertas:Array<{ciudad:string, precio:number, direccion:string, imagen:string}> = [
    {ciudad:'Cartagena', precio: 500000, direccion:'San jose de los campanos calle # 13b', imagen:'Apartamento-en-Arriendo-en-Mazurn.jpg'},
    {ciudad:'Cartagena', precio: 450000, direccion:'Avenida caminoi de enmedio barrio boston calle #35a', imagen:'1024o.jpg'},
    {ciudad:'Barranquilla', precio: 650000, direccion:'San fernando calle #13b', imagen: '2015-05-07_23-04-35.jpg'},
    {ciudad:'Barranquilla', precio: 400000, direccion:'San jose de los campanos calle # 13b', imagen:'apartamento_en_arriendo_en_cartagena_manga.jpg'},
    {ciudad:'Cartagena', precio: 500000, direccion:'Centro historico', imagen:'Apartamento-en-Arriendo-en-Mazurn.jpg'},
    {ciudad:'Barranquilla', precio: 700000, direccion:'Olaya herrera calle #23a', imagen:'habitacion-arriendo_2.jpg'},
    {ciudad:'Cartagena', precio: 1000000, direccion:'Las gaviotas manzana 18', imagen:'apartamento_en_arriendo_en_cartagena_manga.jpg'},
    {ciudad:'Barranquilla', precio: 550000, direccion:'San jose de los campanos calle # 13b', imagen:'1024.jpg'},
    {ciudad:'Cartagena', precio: 450000, direccion:'Avenida caminoi de enmedio barrio boston calle #35a', imagen:'1024o.jpg'},
    {ciudad:'Barranquilla', precio: 650000, direccion:'San fernando calle #13b', imagen: '2015-05-07_23-04-35.jpg'},
    {ciudad:'Cartagena', precio: 450000, direccion:'Avenida caminoi de enmedio barrio boston calle #35a', imagen:'1024o.jpg'},
    {ciudad:'Barranquilla', precio: 650000, direccion:'San fernando calle #13b', imagen: '2015-05-07_23-04-35.jpg'}    
  ]

  width = window.innerWidth;
  clase = 'col-5 col-sm-5 col-lg-6';
  
  widthMintablet = 576;
  widthMinOrdenador = 992;

  constructor() {
    
    if(this.width < 460){
      this.clase = 'col-8 col-sm-5 col-lg-6';
    }
    else if(this.width < 500){
      this.clase = 'col-5 col-sm-5 col-lg-6 px-2';
    }
  }

  ngOnInit() {

  }

}
