import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reestablecer-contrasenia',
  templateUrl: './reestablecer-contrasenia.component.html',
  styleUrls: ['./reestablecer-contrasenia.component.css']
})
export class ReestablecerContraseniaComponent implements OnInit {

  regExp = {
    email: "^\\w+@\\w{3,20}(.\\w{2,10}){1,3}$"
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    //console.log('reestablecer contraseña submit')
  }

}
