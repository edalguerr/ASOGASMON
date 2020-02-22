import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PensionAptoComponent } from './pension-apto/pension-apto.component';


const routes: Routes = [
  {path:'', component: PensionAptoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PensionAptoRoutingModule { }
