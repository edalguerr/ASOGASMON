import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-busco-pension-apto',
  templateUrl: './busco-pension-apto.component.html',
  styleUrls: ['./busco-pension-apto.component.css']
})
export class BuscoPensionAptoComponent implements OnInit {

  @ViewChild('searchBuscoPensionApto') public searchElement: ElementRef;
  @Input() categoriaBuscar:string ='pension';


  //opciones de autocompletado
  opcionesAutocompletado:google.maps.places.AutocompleteOptions = {
    types: ['(regions)'],//limita la busqueda a regiones, ciudades y otros
    componentRestrictions: {//limita las busquedas a solo colombia
      country: ['co']
    }
  };
  
  maxCaracteresDescripcion = 200;

  regExp = {
    celular: "\\d{10}",
    precio: "\\d{1,15}",
    descripcion: new RegExp(".{0,"+this.maxCaracteresDescripcion+"}")
  }

  descripcion;
  descripcionHelpActivar = false;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { 


  }

  ngOnInit() {
    this.inicializarAutocompletado();
    
  }

  inicializarAutocompletado(){

    //verificar que se pueda minimo pais+departamento
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement,this.opcionesAutocompletado);
     
    }
    ); 

    
  }

  guardar(){
    //para protegernos de descripciones mas largas de lo permitido
    if(this.regExp.descripcion.test(this.descripcion)){
      //console.log('form valido')
    }
    else{
      this.descripcionHelpActivar = true;
     // console.log('form invalido')
    }
    

  }

}
