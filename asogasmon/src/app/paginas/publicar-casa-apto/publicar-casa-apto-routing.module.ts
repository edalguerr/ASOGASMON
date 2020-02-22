import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicarCasaAptoComponent } from './publicar-casa-apto/publicar-casa-apto.component';


const routes: Routes = [
  {path: '', component: PublicarCasaAptoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicarCasaAptoRoutingModule { }
