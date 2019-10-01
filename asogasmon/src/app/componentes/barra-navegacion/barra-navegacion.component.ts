import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  @ViewChild('nav_responsive') nav_responsive: ElementRef;

  categoriaBuscoPensionApto: string = 'pension';
  esUsuario = true;
  contador = 1;

  ruta:string = "assets/"; 
  imagen = 'Mini_Protoboard_170_puntos_1.jpg';

  claseIconBtnMenu = 'fa fa-bars fa-lg';

  constructor(private routerNav:Router) { }

  ngOnInit() {
    //console.log(this.nav_responsive)
  }

  categoriaBusco(categoria) {
    this.categoriaBuscoPensionApto = categoria;
  }

  barraNavegacionLateral() {

    if (this.contador == 1) {
      this.contador = 0;

      this.nav_responsive.nativeElement.style.animationName = 'desplazamiento-lateral';
      this.nav_responsive.nativeElement.style.animationDirection = 'normal';
      this.nav_responsive.nativeElement.style.animationDuration = '0.8s';
      this.nav_responsive.nativeElement.style.left = '0';

      this.claseIconBtnMenu = 'fa fa-times fa-lg';
      setTimeout(() => {
        this.nav_responsive.nativeElement.style.animationName = '';
      }, 500)

    }
    else {
      this.contador = 1;

      this.nav_responsive.nativeElement.style.animationName = 'desplazamiento-lateral';
      this.nav_responsive.nativeElement.style.animationDirection = 'reverse';
      this.nav_responsive.nativeElement.style.animationDuration = '0.5s';
      this.nav_responsive.nativeElement.style.left = '-100%';

      this.claseIconBtnMenu = 'fa fa-bars fa-lg';

      setTimeout(() => {
        this.nav_responsive.nativeElement.style.animationName = '';
      }, 500)
    }

  }

  irPerfil(){
    if(this.esUsuario){
      this.routerNav.navigateByUrl('/perfil/usuario');
    }
  
  }

}
