import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  esParaMisAnuncios = true;
  claseTamColumna = 'col-4';
  tipoInmueblePension = 'pension';
  tipoInmuebleApto = 'apartamento';
  tipoInmuebleHabitacion = 'habitacion';

  tenemosAnuncios = true;

  ruta:string = "assets/"; 
  imagen = 'Mini_Protoboard_170_puntos_1.jpg';

  width = window.innerWidth; // ancho del navegador
  widthMobileMiniSmartphone = 420;//380 

  constructor(public usuarioService:UsuarioService) {  
    
    /*Para los celulares mas pequeños(maximo 420 px)*/
    if(this.width <= this.widthMobileMiniSmartphone){
      /*La clase .mis-anuncios-ofertas se encuentra en el compónente 
      slide-ofertas-destacadas, se encarga de reducir el padding para
      smartphones con viewport de maximo 420px*/
      this.claseTamColumna = 'col-6 mis-anuncios-ofertas';
    }

  }

  ngOnInit() {
    
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        
        this.imagen = reader.result.toString();
        this.ruta ='';
      }
    }
  }

}
