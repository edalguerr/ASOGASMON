import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Md5 } from 'ts-md5';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  @ViewChild('formReset',{static:false}) formReset: ElementRef;

  regExp = {
    password: ".{6,20}"
  }

  actualizado = false;
  mensajeError = false;
  usuario = null;

  constructor(private rutaActiva: ActivatedRoute, private usuarioService:UsuarioService) { }

  ngOnInit() {

    this.usuario = {
      email: this.rutaActiva.snapshot.params.email,
      token: this.rutaActiva.snapshot.params.token
    };

  }

  resetPass(){
    this.usuario.contrasenia = this.formReset.nativeElement[0].value;
    const md5 = new Md5();
    this.usuario.contrasenia = md5.appendStr(this.usuario.contrasenia ).end();
    
    console.log(this.usuario)

    this.usuarioService.reestablecerContrasenia(this.usuario).subscribe((res:{usuario:any})=>{

      console.log(res.usuario)

      //actualizacion exitosa
      if(res.usuario != null){
        console.log("contraseña actualizada")
        this.actualizado = true;
        this.mensajeError = false;
      }
      else{
        console.log("contraseña NO actualizada")
        this.actualizado = false;
        this.mensajeError = true;
      }

    },(err)=>{
      console.log("Error al actualizar contraseña, intentelo de nuevo")
      console.log(err);
      this.mensajeError = true;
    });


  }

}
