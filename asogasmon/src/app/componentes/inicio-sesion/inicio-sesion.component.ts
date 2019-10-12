import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { getMaxListeners } from 'cluster';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import {Md5} from 'ts-md5/dist/md5';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  @ViewChild('formLogin') formLogin:ElementRef;
  @Output() emitEventLogin:EventEmitter<Boolean> = new EventEmitter<Boolean>();

  regExp = {
    email: "^\\w+@\\w{3,20}(.\\w{2,10}){1,3}$", 
    password: ".{6,20}"
  }

  usuario:{email, contrasenia} = {email: '', contrasenia:''};
  sesionIniciada = false;
  mostrarMsjDatosIncorrectos = false;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
   
  }

  guardar(){
    console.log("ejecutado")
    this.usuario.email = this.formLogin.nativeElement[1].value;
    this.usuario.contrasenia = this.formLogin.nativeElement[2].value;
    const md5 = new Md5();
    //this.usuario.contrasenia = md5.appendStr(this.usuario.contrasenia ).end();
    
    console.log(this.usuario);

    this.usuarioService.getDatos(this.usuario).subscribe( (result:{usuario:Usuario}) => {
      console.log('peticion exitosa');
      //console.log(result);
      
      this.usuarioService.datos = result.usuario;
      console.log(this.usuarioService.datos);
  
      if(this.usuarioService.datos != null){
        console.log('bienvenido al sistema');
        this.sesionIniciada = true;
        this.mostrarMsjDatosIncorrectos = false;
        this.emitEventLogin.emit(this.sesionIniciada);
        console.log('evento emitido')
      }
      else{
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
