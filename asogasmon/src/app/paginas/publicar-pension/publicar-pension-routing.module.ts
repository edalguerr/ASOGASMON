import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicarPensionComponent } from './publicar-pension/publicar-pension.component';


const routes: Routes = [
  {path: '', component: PublicarPensionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicarPensionRoutingModule { }
