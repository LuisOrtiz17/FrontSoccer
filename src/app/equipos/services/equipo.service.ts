import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipos } from '../interfaces/Equipos';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private baseUrl: string = environment.endPoint;

  constructor(private http: HttpClient) { }

  getEquiposForTorneo(torneo?: string): Observable<Equipos> {

    if (!torneo) {
      return this.http.get<Equipos>(
        `${this.baseUrl}/teams`
      );
    } else {
      return this.http.get<Equipos>(
        `${this.baseUrl}/teams/fortorneo?idtorneo=${torneo}`);
    }

  }
}
