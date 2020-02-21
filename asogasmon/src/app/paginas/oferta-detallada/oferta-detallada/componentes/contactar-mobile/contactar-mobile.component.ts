import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactar-mobile',
  templateUrl: './contactar-mobile.component.html',
  styleUrls: ['./contactar-mobile.component.css']
})
export class ContactarMobileComponent implements OnInit {

  regExp = {
    celular: "\\d{10}",
  }

  maxCaracteresMensaje = 800;
  
  constructor() { }

  ngOnInit() {
  }

}
