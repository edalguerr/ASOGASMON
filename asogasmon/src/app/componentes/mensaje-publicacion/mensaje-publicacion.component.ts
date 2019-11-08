import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-publicacion',
  templateUrl: './mensaje-publicacion.component.html',
  styleUrls: ['./mensaje-publicacion.component.css']
})
export class MensajePublicacionComponent implements OnInit {

  @Input() mensaje = "";
  @Input() publicado = false;
  @Input() rutaOferta = "/articulos";

  constructor() { }

  ngOnInit() {
  }

}
