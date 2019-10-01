import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FiltrosPensionAptoComponent } from 'src/app/componentes/filtros-pension-apto/filtros-pension-apto.component';

@Component({
  selector: 'app-pension-apto',
  templateUrl: './pension-apto.component.html',
  styleUrls: ['./pension-apto.component.css']
})
export class PensionAptoComponent implements OnInit {
  @ViewChild('filtrosBusqueda') filtrosBusqueda: FiltrosPensionAptoComponent;
  
  height = Math.round(window.innerHeight * 0.9); // alto del navegador
  height86 = Math.round(this.height * 0.86);
  width = window.innerWidth;
  widthMobile = 992;
  mostrarMapaMobile = false;
  //claseAnchoMapa = "100%";
  //clasePaddingMapa = "15";
  //claseAnchoFiltros = "0%";

  constructor() { 
  } 

  ngOnInit() {
   
    setTimeout(()=>{
      //console.log('tiempo cumplido')
      this.mostrarMapaMobile = false;
      //this.claseAnchoMapa="0%";
      //this.clasePaddingMapa = "0";
      //this.claseAnchoFiltros="100%";
    },2000)

    this.filtrosBusqueda.emitEvent.subscribe(( res )=>{
      this.mostrarMapaMobile = res;
      //console.log('evento escuchado')
      //console.log(res) 
      //this.claseAnchoMapa = ((this.mostrarMapaMobile)?"100%":"0%");
      //this.clasePaddingMapa = "15";
      //this.claseAnchoFiltros = ((this.mostrarMapaMobile)?"100%":"0%");
    })
    //console.log(this.height)
    //console.log(this.height86)
  }

}

