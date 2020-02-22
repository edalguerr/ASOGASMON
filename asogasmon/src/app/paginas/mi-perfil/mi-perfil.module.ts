import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MiPerfilRoutingModule } from './mi-perfil-routing.module';

import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { ModificarContraseniaComponent } from './mi-perfil/componentes/modificar-contrasenia/modificar-contrasenia.component';
import { EditarDatosBasicosComponent } from './mi-perfil/componentes/editar-datos-basicos/editar-datos-basicos.component';


@NgModule({
  declarations: [
    MiPerfilComponent,
    ModificarContraseniaComponent,
    EditarDatosBasicosComponent,
  ],
  imports: [
    CommonModule,
    MiPerfilRoutingModule,
    FormsModule
  ]
})
export class MiPerfilModule { }
