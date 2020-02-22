import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-modificar-contrasenia',
  templateUrl: './modificar-contrasenia.component.html',
  styleUrls: ['./modificar-contrasenia.component.css']
})
export class ModificarContraseniaComponent implements OnInit {

    
  usuario = {email: ''};
  enviado = false;
  errorEnviar = false;

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit() {
    
  }

  reestablecer(){
    
    this.usuario.email = this.usuarioService.datos.EMAIL;

    console.log(this.usuario);

    this.usuarioService.reestablecerContraseniaEmail(this.usuario).subscribe((res:{usuario:any})=>{

      console.log(res.usuario)

      //email enviado
      if(res.usuario != null){
        console.log("email enviado")
        this.enviado = true;
        this.errorEnviar = false;

      }//usuario no encontrado
      else{
        console.log("error al enviar email")
        this.enviado = false;
        this.errorEnviar = true;

      }

    },(err)=>{
      console.log("error al enviar el email")
      console.log(err)
      this.enviado = false;
      this.errorEnviar = true;

    });
  }

}



