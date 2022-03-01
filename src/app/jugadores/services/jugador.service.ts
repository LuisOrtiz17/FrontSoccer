import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Players, Jugador } from '../interfaces/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private baseUrl: string = environment.endPoint;

  constructor(private http: HttpClient) { }

  getPlayers(equipo?: string): Observable<Players> {
    if (!equipo) {
      return this.http.get<Players>(`${this.baseUrl}/players`);
    } else {
      return this.http.get<Players>(
        `${this.baseUrl}/players/forteam?idteam=${equipo}`
      )
    }

  }

  addPlayer(player: object){
    return this.http.post<Players>(`${this.baseUrl}/players/new`, player);
  }

  updatePlayer(id: string, player: object){
    return this.http.put<Players>(`${this.baseUrl}/players/${id}`, player);
  }

  deletePlayer(id: string){
    return this.http.delete<Players>(`${this.baseUrl}/players/${id}`);
  }


}
