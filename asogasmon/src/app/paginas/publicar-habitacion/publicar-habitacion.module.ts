import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicarHabitacionRoutingModule } from './publicar-habitacion-routing.module';
import { FormsModule } from '@angular/forms';
import { CompartidosModule } from 'src/app/compartidos/compartidos.module';

import { PublicarHabitacionComponent } from './publicar-habitacion/publicar-habitacion.component';


@NgModule({
  declarations: [
    PublicarHabitacionComponent
  ],
  imports: [
    CommonModule,
    PublicarHabitacionRoutingModule,
    FormsModule,
    CompartidosModule
  ]
})
export class PublicarHabitacionModule { }
