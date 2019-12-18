import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SlideOfertaDetalladaComponent } from 'src/app/componentes/slide-oferta-detallada/slide-oferta-detallada.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oferta-detallada',
  templateUrl: './oferta-detallada.component.html',
  styleUrls: ['./oferta-detallada.component.css']
})
export class OfertaDetalladaComponent implements OnInit, AfterViewInit {
  
  @ViewChild('slideImagenesOferta',{static:false}) slideImagenesOferta:SlideOfertaDetalladaComponent;

  isOrdenador = false;
  widthMobile = 992;
  width = window.innerWidth; // ancho del navegador
  ruta:string = "assets/";
  imagen = "179809-OWKTX6-319.jpg";
  imagenes:Array<string> = ['B7111-BL_BATA_UPC_ml.jpg','libro-de-oro-de-matemticas-1-638.jpg',
  'habitacion-arriendo_2.jpg', '1024o.jpg'];

  numeroCelularPrueba = '3106022481';
  esMyAnuncio = false;

  precio = 2000000;


  constructor(private activateRoute:ActivatedRoute, private router:Router) {
    
    let paramRoute = this.activateRoute.snapshot.params.id;
    console.log(paramRoute)

    //verificamos que el parametro id de la oferta sea numerico
    //en caso de no serlo, redireccionamos a la pagina principal
    if(!parseInt(paramRoute)){
      this.router.navigateByUrl(`/`);
    }
    
    paramRoute =   parseInt(paramRoute);

    /*Para tablets grandes */
    if(this.width > this.widthMobile){
      this.isOrdenador = true;  
    }

  }

  ngOnInit() {
   
  }

  ngAfterViewInit(){
    this.slideImagenesOferta.emitEvent.subscribe((res)=>{
      this.imagen = res;
    })
  }

}
