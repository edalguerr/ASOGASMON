import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

import { UbicacioMapaFiltrosService } from 'src/app/servicios/ubicacio-mapa-filtros.service';
import { OfertasInmueblesService } from 'src/app/servicios/ofertasInmuebles/ofertas-inmuebles.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  lat: number = this.ubicacioMapaFiltrosService.lat;
  lng: number = this.ubicacioMapaFiltrosService.lng;

  lat2: number = 4.69855158983652;
  lng2: number = -74.07194335937498;

  labelMarker: Array<{
    color: 'floralwhite',
    fontFamily: 'Indie Flower',//cursive
    fontSize: '12px',//10px
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    text
  }> = [];

  titleMarker: string = "direccion";
  zoom: number = 10;
  minZoom: number = 8;
  draggable = false;
  streetView: boolean = false;

  marker: google.maps.Marker;

  coordenadas: Array<{ lat, lng }> = [
    { lat: 4.697610624442374, lng: -74.07511909484862 },
    { lat: 4.700176890707453, lng: -74.07177169799803 },
    { lat: 4.698979300959474, lng: -74.06516273498534 },
    { lat: 4.691793719281326, lng: -74.06790931701659 },
    { lat: 4.697525082070904, lng: -74.08052642822264 },
    { lat: 4.7012033945677425, lng: -74.0587254333496 },
    { lat: 4.707875632780457, lng: -74.07451828002928 },
    { lat: 4.6964130302861475, lng: -74.08344467163084 }
  ]

  clusterStyles = [
    {
      textColor: "#000000",
      textSize: 12,
      url: "'assets/m2.png'",
      height: 64,
      width: 64,
      anchor: [18, 65],
      backgroundPosition: 'center'
    },
    {
      textColor: "#000000",
      textSize: 12,
      url: "'assets/m1.png'",
      height: 64,
      width: 64,
      anchor: [18, 65],
      backgroundPosition: 'center'
    }
  ]

  heightMapa = Math.round(Math.round(window.innerHeight * 0.9) * 0.86);

  constructor(
    public ubicacioMapaFiltrosService: UbicacioMapaFiltrosService,
    public ofertasInmueblesService: OfertasInmueblesService
  ) {

  }

  ngOnInit() {

  }

  markerIconUrl() {
    return require('../../../../assets/bocadillo(6).png')
  }


}
