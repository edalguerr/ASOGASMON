import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicarHabitacionComponent } from './publicar-habitacion/publicar-habitacion.component';


const routes: Routes = [
  {path:'', component: PublicarHabitacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicarHabitacionRoutingModule { }
