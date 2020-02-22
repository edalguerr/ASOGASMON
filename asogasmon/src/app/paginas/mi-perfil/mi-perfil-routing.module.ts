import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';


const routes: Routes = [
  {path: '', component: MiPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiPerfilRoutingModule { }
