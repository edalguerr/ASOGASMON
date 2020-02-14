import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements AfterViewInit {

  @ViewChild('nav_responsive',{static:false}) nav_responsive: ElementRef;
  @ViewChild('inicioSesionComponente', {static:false}) inicioSesionComponent: InicioSesionComponent;


  esUsuario = false;
  contador = 1;

  ruta: string = "assets/";
  imagen = 'Mini_Protoboard_170_puntos_1.jpg';
  avatarDefault = 'avatar.png';

  claseIconBtnMenu = 'fa fa-bars fa-lg';
  API_URL = "http://localhost/asogasmonAPI/public/img/user/";

  constructor(private routerNav: Router, private usuarioService: UsuarioService) {

    if (this.usuarioService.datos != null) {
      this.esUsuario = true;
    }
    
  }

  ngAfterViewInit() {
    

    this.inicioSesionComponent.emitEventLogin.subscribe((res) => {
      this.esUsuario = res;

      if (this.usuarioService.datos.FOTO != this.avatarDefault) {
        //inicializando ruta para obtener avatar de usuario
        this.usuarioService.datos.FOTO = this.API_URL + this.usuarioService.datos.ID
          + "/" + this.usuarioService.datos.FOTO;
      }
      else{
        this.usuarioService.datos.FOTO = this.API_URL + this.avatarDefault;
      }

    });

    if (this.usuarioService.datos != null) {
      this.esUsuario = true;
    }

    
  }

  //menú de navegacion mobile
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

  irPerfil() {
    if (this.esUsuario) {

      this.routerNav.navigateByUrl('/perfil/usuario');
    }

  }

  //metodo para que el usuario cierre la sesion
  cerrarSesion() {
    this.esUsuario = false;
    this.usuarioService.datos = null;
    localStorage.removeItem('token');
  }

}
