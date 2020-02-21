import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-full-screen',
  templateUrl: './carousel-full-screen.component.html',
  styleUrls: ['./carousel-full-screen.component.css']
})
export class CarouselFullScreenComponent implements OnInit {

  ruta = "assets/";
  imagenes:Array<string> = ['2015-05-07_23-04-35.jpg','Apartamento-en-Arriendo-en-Mazurn.jpg',
  'Mini_Protoboard_170_puntos_1.jpg', 'apartamento_en_arriendo_en_cartagena_manga.jpg', 'libro-de-oro-de-matemticas-1-638.jpg',
  '00106652174191____1__640x640.jpg', '179809-OWKTX6-319.jpg', 'B7111-BL_BATA_UPC_ml.jpg', 'bd18ca0af17b52d6278d74ec3ea0b769-product.jpg',
  '1024o.jpg', '1024.jpg', '00106652174191____1__640x640.jpg', 'apartamento_en_arriendo_en_cartagena_manga.jpg', 'bd18ca0af17b52d6278d74ec3ea0b769-product.jpg',
  'habitacion-arriendo_2.jpg', '2015-05-07_23-04-35.jpg'
  ];

  /*imagenes:Array<string> = ['Apartamento-en-Arriendo-en-Mazurn.jpg'];*/
  
  constructor() { }

  ngOnInit() {
  }

}
