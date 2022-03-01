import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JugadoresRoutingModule } from './jugadores-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { EditarComponent } from './components/editar/editar.component';


@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JugadoresRoutingModule,
    PrimeNgModule
  ]
})
export class JugadoresModule { }
