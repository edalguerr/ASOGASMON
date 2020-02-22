import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Md5 } from 'ts-md5';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/core/interfaces/usuario';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  @ViewChild('formRegistro',{static:false}) formRegistro: ElementRef;
  @Output() emitEventRegistro: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  
  regExp = {
    email: "^\\w+@\\w{3,20}(.\\w{2,10}){1,3}$",
    password: ".{6,20}",
    nombre: "^\\w{3,15}(\\s\\w{2,15}){0,3}$",
    apellidos: "^\\w{2,15}(\\s(\\w{2,15})){0,4}$"
  }

  usuario: { email, contrasenia, nombre, apellidos } = { email: '', contrasenia: '', nombre: '', apellidos: '' };
  sesionIniciada = false;
  mostrarMsjDatosIncorrectos = false;
  token = null;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  //registrarse
  guardar() {
    //console.log(this.formRegistro)

    //obteniendo datos del formulario
    this.usuario.email = this.formRegistro.nativeElement[1].value;
    this.usuario.nombre = this.formRegistro.nativeElement[2].value;
    this.usuario.apellidos = this.formRegistro.nativeElement[3].value;
    this.usuario.contrasenia = this.formRegistro.nativeElement[4].value;

    const md5 = new Md5();
    this.usuario.contrasenia = md5.appendStr(this.usuario.contrasenia).end();

    //console.log(this.usuario);

    //realizando peticion post a la API para registrar el usuario e iniciar sesion
    this.usuarioService.registrarUsuario(this.usuario).subscribe((result: { usuario: Usuario }) => {
      //console.log('peticion exitosa');
      //console.log(result);

      this.usuarioService.datos = result.usuario;
      //console.log(this.usuarioService.datos);

      if (this.usuarioService.datos != null) {

        //console.log('bienvenido al sistema, Registro completado');
        this.sesionIniciada = true;
        this.mostrarMsjDatosIncorrectos = false;
        localStorage.setItem('token', this.usuarioService.datos.ID_TOKEN);
        this.emitEventRegistro.emit(this.sesionIniciada);
        //console.log('evento emitido')
      }
      else {
        this.sesionIniciada = false;
        this.mostrarMsjDatosIncorrectos = true;
      }


    }, err => {
      console.log('Ha ocurrido un error al conectar con el servidor para registrar el nuevo usuario');
      console.log(err);
      this.sesionIniciada = false;
      this.mostrarMsjDatosIncorrectos = true;
    });


  }
  
}
