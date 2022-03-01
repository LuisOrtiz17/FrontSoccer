import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Torneos } from '../interfaces/Torneos';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  private  baseUrl: string = environment.endPoint;

  constructor(private http: HttpClient) { }

  getTorneos(): Observable<Torneos>{
    return this.http.get<Torneos>(`${this.baseUrl}/torneos`);
  }
}
