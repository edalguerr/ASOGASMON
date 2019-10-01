import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  regExp = {
    email: "^\\w+@\\w{3,20}(.\\w{2,10}){1,3}$", 
    password: ".{6,20}"
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    //console.log('login submit')
  }
}
