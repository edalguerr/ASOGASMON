import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  regExp = {
    email: "^\\w+@\\w{3,20}(.\\w{2,10}){1,3}$", 
    password: ".{6,20}",
    nombre: "^\\w{3,15}(\\s\\w{2,15}){0,3}$",
    apellidos: "^\\w{2,15}(\\s(\\w{2,15})){0,4}$"
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    //console.log('registrado submit')
  }
}
