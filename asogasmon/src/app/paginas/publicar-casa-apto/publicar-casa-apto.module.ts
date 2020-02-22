import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicarCasaAptoRoutingModule } from './publicar-casa-apto-routing.module';
import { CompartidosModule } from 'src/app/compartidos/compartidos.module';
import { FormsModule } from '@angular/forms';

import { PublicarCasaAptoComponent } from './publicar-casa-apto/publicar-casa-apto.component';


@NgModule({
  declarations: [
    PublicarCasaAptoComponent
  ],
  imports: [
    CommonModule,
    PublicarCasaAptoRoutingModule,
    CompartidosModule,
    FormsModule
  ]
})
export class PublicarCasaAptoModule { }
