import { Component, OnInit, ViewChild } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../interfaces/Jugador';
import { Torneo } from '../../../torneos/interfaces/Torneos';
import { TorneoService } from '../../../torneos/services/torneo.service';
import { Equipo } from 'src/app/equipos/interfaces/Equipos';
import { EquipoService } from '../../../equipos/services/equipo.service';
import { EditarComponent } from '../../components/editar/editar.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ],
  providers: [MessageService, ConfirmationService]
})
export class ListadoComponent implements OnInit {

  players: Jugador[] = [];
  jugador!: Jugador;
  torneos: Torneo[] = [];
  selectedTorneo!: Torneo;
  equipos: Equipo[] = [];
  selectedEquipo!: Equipo;

  displayModal!: boolean;
  dialogEdit!: boolean;

  @ViewChild(EditarComponent) editComp!: EditarComponent;
  
  invalidFormEdit: boolean = false;
  

  constructor(private playerService: JugadorService,
    private torneoService: TorneoService,
    private equipoService: EquipoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.playerService.getPlayers()
      .subscribe(resp => {
        this.players = resp.data;
      });
  }

  cargarTorneos() {
    this.torneoService.getTorneos()
      .subscribe(resp => {
        
        this.torneos = resp.data;

      });
  }

  cargarEquipos() {
    if (!this.selectedTorneo) {
      return;
    } else {
      this.equipoService.getEquiposForTorneo(this.selectedTorneo._id)
        .subscribe(resp => {
          this.equipos = resp.data;
        });
    }

  }

  obtenPlayers() {
    if (!this.selectedEquipo) {
      this.playerService.getPlayers()
        .subscribe(resp => {
          this.players = resp.data;
        });
    } else {
      this.playerService.getPlayers(this.selectedEquipo._id)
        .subscribe(resp => {
          //console.log(resp);
          this.players = resp.data;
          
        });
    }

  }

  showModalDialog() {
    this.displayModal = true;
  }

  openEditDialog(jugador: Jugador){
    this.jugador = jugador;
    this.dialogEdit = true;
  }

  hideDialog(){
  this.dialogEdit = false;
  }

  updatePlayer(){
    console.log('FormValid: ', this.editComp.miForm.valid);

    this.playerService.updatePlayer(this.jugador._id, this.editComp.miForm.value)
    .subscribe( resp => {
      
      if (resp.ok) {
        
        this.messageService.add({key: 'ok', severity:'success', summary: 'Success', detail: `Jugador fue actualizado con exito.`});
        this.dialogEdit = false;
        this.obtenPlayers();
        
      } else {
        this.messageService.add({key: 'error',severity:'error', summary: 'Error', detail: 'No fue posible actualizar el jugador'});
      }
    });

    
  }

  deletePlayer(jugador: Jugador){

    this.confirmationService.confirm({
      message: 
      'Esta seguro de eliminar al jugador ' + 
      jugador.nombre + ' del equipo ' + jugador.equipo.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.playerService.deletePlayer(jugador._id)
        .subscribe( resp => {
          if(resp.ok) {
            this.messageService.add({key: 'ok', severity:'success', summary: 'Success', detail: `Jugador fue eliminado con exito.`});
            this.obtenPlayers();
          } else {
            this.messageService.add({key: 'error',severity:'error', summary: 'Error', detail: 'No fue posible eliminar el jugador'});
          }
        });
      }
    });
  }


}
