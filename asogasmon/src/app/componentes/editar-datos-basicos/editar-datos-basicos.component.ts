import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-datos-basicos',
  templateUrl: './editar-datos-basicos.component.html',
  styleUrls: ['./editar-datos-basicos.component.css']
})
export class EditarDatosBasicosComponent implements OnInit {

  nombre:string = 'Edwin Alberto';
  apellidos:string = 'Guerrero  Acosta';
  correoElectronico:string = 'eguerreroa1@gmail.com';

  constructor() { }

  ngOnInit() {
  }

}
