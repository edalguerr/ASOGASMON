import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})


export class MessengerComponent implements OnInit {


  conversacionActualInd = 0;
  tiposMensajes = ['recibido', 'enviado'];
  miFotoPerfil = 'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg';

  mensajes:Array<{mensaje:string, tipoMsj:string, fechaHora:string}> = [
    {mensaje:'Excuse me, could you tell me what time it is?', tipoMsj:this.tiposMensajes[1], fechaHora:'6:33 PM, 14/04/2019'},
    {mensaje:'Is this seat taken?', tipoMsj:this.tiposMensajes[0], fechaHora:'6:33 PM, 14/04/2019'},
    {mensaje:'No', tipoMsj:this.tiposMensajes[1], fechaHora:'6:33 PM, 14/04/2019'},
    {mensaje:'Do you mind if I seat here?', tipoMsj:this.tiposMensajes[1],fechaHora:'6:33 PM, 14/04/2019'},
    {mensaje:'No at all', tipoMsj:this.tiposMensajes[0], fechaHora:'6:33 PM, 14/04/2019'},
    {mensaje:'Hello, do you know how to get to Hyde Park?', tipoMsj:this.tiposMensajes[1], fechaHora:'6:33 PM, 14/04/2019'},
    {mensaje:'Yes, it’s two blocks in that direction', tipoMsj:this.tiposMensajes[0], fechaHora:'6:33 PM, 14/04/2019'},
    {mensaje:'Thank you', tipoMsj:this.tiposMensajes[1], fechaHora:'6:33 PM, 14/04/2019'},
    {mensaje:'Excurse me, do you know where I can find Mr. Jackson?', tipoMsj:this.tiposMensajes[0], fechaHora:'6:33 PM, 14/04/2019'},
    {mensaje:'Yes, he’s in his office, second door en the left', tipoMsj:this.tiposMensajes[1], fechaHora:'6:33 PM, 14/04/2019'},
  ];


  conversaciones:Array<{imagen:string, nombre:string, cantMensajes:number, mensajes:Array<{mensaje:string, tipoMsj:string, fechaHora:string}>}> = [
    {imagen: 'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg', 
    nombre: 'Edwin Alberto', cantMensajes: 50, mensajes: this.mensajes},
    {imagen: 'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg', 
    nombre: 'Jesus Argota',  cantMensajes: 70, mensajes: this.mensajes},
    {imagen: 'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg', 
    nombre: 'Ferman Cantor', cantMensajes: 100, mensajes: this.mensajes},
    {imagen: 'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg', 
    nombre: 'Juan Caldera', cantMensajes: 10, mensajes: this.mensajes},
    {imagen: 'https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg', 
    nombre: 'Juan Baldovino', cantMensajes: 60, mensajes: this.mensajes}
  ];


  maxCaracteresMensaje = 800; 


  constructor() { }

  ngOnInit() {
  }

  seleccionarChat(i){
    this.conversacionActualInd = i;
  }

}
