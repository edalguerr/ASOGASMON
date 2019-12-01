import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ofertas-pension-apto',
  templateUrl: './ofertas-pension-apto.component.html',
  styleUrls: ['./ofertas-pension-apto.component.css']
})
export class OfertasPensionAptoComponent implements OnInit {

  @Input() ofertasObtenidas = {
    ofertas: []
  };
  
  API_URL = "http://localhost/asogasmonAPI/public/img/";
  ruta:string = ""; 
  rutaOfertas = '';
 
  width = window.innerWidth;
  clase = 'col-5 col-sm-5 col-lg-6';
  
  widthMintablet = 576;
  widthMinOrdenador = 992;

  constructor(private rutaActiva: ActivatedRoute) {
    
    if(this.width < 460){
      this.clase = 'col-8 col-sm-5 col-lg-6';
    }
    else if(this.width < 500){
      this.clase = 'col-5 col-sm-5 col-lg-6 px-2';
    }
  }

  ngOnInit() {
    this.ofertasObtenidas = {ofertas: []};
    let categoria = this.rutaActiva.snapshot.url[0].path;

    if (categoria == 'apartamentos') {
      this.ruta = this.API_URL + 'ofertasCasaApto/';
      this.rutaOfertas = '/ofertasCasaApto/';
    }
    else if (categoria == 'pensiones') {
      
    }
    else {
      
    }

  }

}
