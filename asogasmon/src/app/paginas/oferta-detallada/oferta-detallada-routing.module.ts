import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertaDetalladaComponent } from './oferta-detallada/oferta-detallada.component';


const routes: Routes = [
  {path: '', component: OfertaDetalladaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertaDetalladaRoutingModule { }
