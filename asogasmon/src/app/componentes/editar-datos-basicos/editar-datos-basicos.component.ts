import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-editar-datos-basicos',
  templateUrl: './editar-datos-basicos.component.html',
  styleUrls: ['./editar-datos-basicos.component.css']
})
export class EditarDatosBasicosComponent implements OnInit {

  //@ViewChild('formActualizarDatos') formActualizarDatos: ElementRef;

  nombre: string = 'fulano';
  apellidos: string = 'fulano de tal';
  correoElectronico: string = 'ningunoi@gmail.com';

  mostrarMsjDatosIncorrectos = false;
  mostrarMsjDatosActualizados = false;

  regExp = {
    email: "^\\w+@\\w{3,20}(.\\w{2,10}){1,3}$",
    nombre: "^\\w{3,15}(\\s\\w{2,15}){0,3}$",
    apellidos: "^\\w{2,15}(\\s(\\w{2,15})){0,4}$"
  }

  constructor(public usuarioService: UsuarioService) {

    if (this.usuarioService.datos != null) {
      this.nombre = this.usuarioService.datos.NOMBRE;
      this.apellidos = this.usuarioService.datos.APELLIDOS;
      this.correoElectronico = this.usuarioService.datos.EMAIL;
    }

  }

  ngOnInit() {

    if (this.usuarioService.datos != null) {
      this.nombre = this.usuarioService.datos.NOMBRE;
      this.apellidos = this.usuarioService.datos.APELLIDOS;
      this.correoElectronico = this.usuarioService.datos.EMAIL;
    }

    
  }


  //actualizar datos
  guardar() {
    //console.log(this.formActualizarDatos);
    
    if (this.usuarioService.datos != null) {

    
      let usuario = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        email: this.correoElectronico,
        id: this.usuarioService.datos.ID
      }

      this.usuarioService.actualizarDatos(usuario).subscribe((result: { usuario: Usuario }) => {

        
        //console.log(this.usuarioService.datos);

        if (result.usuario != null) {

          console.log('Actualizacion de datos completada');
          this.usuarioService.datos = result.usuario;
          this.mostrarMsjDatosIncorrectos = false;
          this.mostrarMsjDatosActualizados = true;
          localStorage.setItem('token', this.usuarioService.datos.ID_TOKEN);

        }
        else {
          this.mostrarMsjDatosActualizados = false;
          this.mostrarMsjDatosIncorrectos = true;
        }


      }, err => {
        console.log('Ha ocurrido un error al conectar con el servidor para registrar el nuevo usuario');
        console.log(err);
        this.mostrarMsjDatosActualizados = false;
        this.mostrarMsjDatosIncorrectos = true;
      });

    }

  }

}
