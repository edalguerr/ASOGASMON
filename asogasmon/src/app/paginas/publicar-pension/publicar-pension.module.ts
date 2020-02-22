import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarPensionRoutingModule } from './publicar-pension-routing.module';
import { FormsModule } from '@angular/forms';
import { CompartidosModule } from 'src/app/compartidos/compartidos.module';
import { PublicarPensionComponent } from './publicar-pension/publicar-pension.component';


@NgModule({
  declarations: [
    PublicarPensionComponent
  ],
  imports: [
    CommonModule,
    PublicarPensionRoutingModule,
    FormsModule,
    CompartidosModule
  ]
})
export class PublicarPensionModule { }
