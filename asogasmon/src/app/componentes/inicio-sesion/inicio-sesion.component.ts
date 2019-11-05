import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Usuario } from 'src/app/interfaces/usuario';
import { RegistrarseComponent } from '../registrarse/registrarse.component';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent implements OnInit {

  @ViewChild('formLogin') formLogin: ElementRef;
  @ViewChild('registrarseComponente') registrarseComponent:RegistrarseComponent;
  @Output() emitEventLogin: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  regExp = {
    email: "^\\w+@\\w{3,20}(.\\w{2,10}){1,3}$",
    password: ".{6,20}"
  }

  usuario: { email, contrasenia } = { email: '', contrasenia: '' };
  sesionIniciada = false;
  mostrarMsjDatosIncorrectos = false;
  token = null;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    
    this.token = localStorage.getItem('token');
    console.log('token: '+this.token);

    //inicio de sesion activa mediante tokens
    // && this.usuarioService.datos == null -> agregar esto, valkidar esto pa que no haga la 
    //peticion cada que entre a este componente si no una sola vez al cargar por primera vez
    if (this.token != null && this.usuarioService.datos == null) {

      //realizando peticion POST para recuperar los datos
      this.usuarioService.getDatosToken(this.token).subscribe((result: { usuario: Usuario }) => {

        this.usuarioService.datos = result.usuario;
        //console.log(result);
        //console.log(this.usuarioService.datos);

        //verificando que se hayan obtenido los datos
        if (this.usuarioService.datos != null) {
          //console.log('Inicio de sesion recuperada');
          this.sesionIniciada = true;
          localStorage.setItem('token', this.usuarioService.datos.ID_TOKEN);
          this.emitEventLogin.emit(this.sesionIniciada);
        }
        else {
          this.sesionIniciada = false;
          console.log('Error al recuperar la sesion');
        }

      }, error => {
        console.log('Error en la autenticacion por tokens')
        console.log(error);
      });

    }

    this.registrarseComponent.emitEventRegistro.subscribe((res)=>{
      this.emitEventLogin.emit(res);
      //console.log('recibido el mensaje: '+ res)
    });
    
  }

  //inicio de sesion
  guardar() {
    
    this.usuario.email = this.formLogin.nativeElement[1].value;
    this.usuario.contrasenia = this.formLogin.nativeElement[2].value;
    const md5 = new Md5();
    this.usuario.contrasenia = md5.appendStr(this.usuario.contrasenia ).end();

    console.log(this.usuario);

    this.usuarioService.getDatos(this.usuario).subscribe((result: { usuario: Usuario }) => {
     
      this.usuarioService.datos = result.usuario;
      console.log(this.usuarioService.datos);

      if (this.usuarioService.datos != null) {

        console.log('bienvenido al sistema');
        this.sesionIniciada = true;
        this.mostrarMsjDatosIncorrectos = false;
        localStorage.setItem('token', this.usuarioService.datos.ID_TOKEN);
        this.emitEventLogin.emit(this.sesionIniciada);
        
      }
      else {
        this.sesionIniciada = false;
        this.mostrarMsjDatosIncorrectos = true;
      }


    }, err => {
      console.log('Ha ocurrido un error al conectar con el servidor');
      console.log(err);
      this.sesionIniciada = false;
      this.mostrarMsjDatosIncorrectos = true;
    });


  }

}
