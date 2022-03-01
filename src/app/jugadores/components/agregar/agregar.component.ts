import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EquipoService } from 'src/app/equipos/services/equipo.service';
import { Equipo } from '../../../equipos/interfaces/Equipos';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ],
  providers: [MessageService]
})
export class AgregarComponent implements OnInit, OnChanges {

  @Input('equipo')
  equipoInput!: Equipo;
  ocultarInput: boolean = true;

  miForm: FormGroup = this.fb.group({
    nombre: [, [Validators.required]],
    dorsal: [, [Validators.min(1), Validators.required]],
    equipo: [, [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private servicePlayer: JugadorService) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.miForm.controls['equipo'].setValue(this.equipoInput._id);
  }

  campoValido(campo: string) {
    return this.miForm.controls[campo].errors &&
      this.miForm.controls[campo].touched;
  }

  limpiar(){
    console.log('Calmate cabron');
    
     this.miForm.reset({
       nombre: null,
      dorsal: null,
      equipo: this.equipoInput._id
     });
  }

  guardar(){
    this.servicePlayer.addPlayer(this.miForm.value)
    .subscribe( resp => {
      if( resp.ok){
        this.messageService.add({key: 'ok',severity:'success', summary: 'Success', detail: 'Jugador agregado con éxito'});
        
      }else {
        this.messageService.add({key: 'error',severity:'error', summary: 'Error', detail: 'No fue posible agregar el jugador'});
        
      }
    });
    this.miForm.reset({
      nombre: null,
     dorsal: null,
     equipo: this.equipoInput._id
    });
  }



}
