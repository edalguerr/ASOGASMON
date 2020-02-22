import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PensionAptoRoutingModule } from './pension-apto-routing.module';
import { CompartidosModule } from 'src/app/compartidos/compartidos.module';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PensionAptoComponent } from './pension-apto/pension-apto.component';
import { FiltrosPensionAptoComponent } from './pension-apto/componentes/filtros-pension-apto/filtros-pension-apto.component';
import { OfertasPensionAptoComponent } from './pension-apto/componentes/ofertas-pension-apto/ofertas-pension-apto.component';





@NgModule({
  declarations: [
    PensionAptoComponent,
    FiltrosPensionAptoComponent,
    OfertasPensionAptoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PensionAptoRoutingModule,
    CompartidosModule,
    Ng5SliderModule,
    FormsModule,
    NgbPaginationModule,
  ]
})
export class PensionAptoModule { }
