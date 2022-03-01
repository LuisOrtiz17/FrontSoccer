import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Jugador } from '../../interfaces/Jugador';
import { Equipo } from '../../../equipos/interfaces/Equipos';
import { EquipoService } from 'src/app/equipos/services/equipo.service';
import { Torneo } from '../../../torneos/interfaces/Torneos';
import { TorneoService } from 'src/app/torneos/services/torneo.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent implements OnInit, OnChanges {

  @Input('player')
  playerInput!: Jugador;

  torneos: Torneo[] = [];
  selectedTorneo!: Torneo;

  equipos: Equipo[] = [];
  selectedEquipo!: Equipo;

  checked: boolean = false;

  miForm: FormGroup = this.fb.group({
    nombre: [, [Validators.required]],
    dorsal: [, [Validators.min(1), Validators.required]],
    equipo: [, [Validators.required]]
  });

  inputTorneo: FormControl = this.fb.control('');

  constructor(private fb: FormBuilder,
              private equipoService: EquipoService,
              private torneoService: TorneoService) { }

  ngOnInit(): void {
    //  this.equipoService.getEquiposForTorneo()
    //  .subscribe(resp => {
    //   this.equipos = resp.data;
    //  });
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    this.miForm.controls['nombre'].setValue(this.playerInput.nombre);
    this.miForm.controls['dorsal'].setValue(this.playerInput.dorsal);
    this.equipos = [];
    this.equipos.push(this.playerInput.equipo);
  }

  campoValido(campo: string) {
    return this.miForm.controls[campo].errors &&
      this.miForm.controls[campo].touched;
  }

  cambioEquipo(){
    //this.checked = true;
    this.torneoService.getTorneos()
    .subscribe( resp => {
      this.torneos = resp.data;
    });
    
  }

  obtenEquipos(){
    if(!this.selectedTorneo){
      return;
    }else{
      this.equipoService.getEquiposForTorneo(this.selectedTorneo._id)
    .subscribe( resp => {
      this.equipos = resp.data;
    });
    }
    
  }

}
