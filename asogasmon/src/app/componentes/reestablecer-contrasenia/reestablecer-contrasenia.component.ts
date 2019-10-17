import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-reestablecer-contrasenia',
  templateUrl: './reestablecer-contrasenia.component.html',
  styleUrls: ['./reestablecer-contrasenia.component.css']
})
export class ReestablecerContraseniaComponent implements OnInit {

  @ViewChild('formResetPass') formResetPass: ElementRef;
  
  regExp = {
    email: "^\\w+@\\w{3,20}(.\\w{2,10}){1,3}$"
  }

  usuario = {email: ''};
  enviado = false;
  errorEnviar = false;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  reestablecer(){
    //console.log(this.formResetPass)
    //console.log(this.formResetPass.nativeElement[1].value)
    this.usuario.email = this.formResetPass.nativeElement[1].value;

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
