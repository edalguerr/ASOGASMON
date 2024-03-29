import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FiltrosPensionAptoComponent } from 'src/app/paginas/pension-apto/pension-apto/componentes/filtros-pension-apto/filtros-pension-apto.component';

@Component({
  selector: 'app-pension-apto',
  templateUrl: './pension-apto.component.html',
  styleUrls: ['./pension-apto.component.css']
})
export class PensionAptoComponent implements OnInit, AfterViewInit {
  @ViewChild('filtrosBusqueda',{static:false}) filtrosBusqueda: FiltrosPensionAptoComponent;
  
  height = Math.round(window.innerHeight * 0.9); // alto del navegador
  height86 = Math.round(this.height * 0.86);
  width = window.innerWidth;
  widthMobile = 992;
  mostrarMapaMobile = false;
  

  constructor() { 
  } 

  ngOnInit() {
   
    //El mapa carga y rapidamente lo ocultamos en dispositivos moviles
    setTimeout(()=>{
      this.mostrarMapaMobile = false;
    },2000)

  }

  ngAfterViewInit(){

    this.filtrosBusqueda.emitEvent.subscribe(( res )=>{
      this.mostrarMapaMobile = res;
    })
    
  }

}

