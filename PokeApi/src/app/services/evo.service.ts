import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvolutionListResponse } from '../interfaces/evo.interface';

@Injectable({
  providedIn: 'root'
})
export class EvoService {

  constructor(private http: HttpClient) { 

  }

  getEvosList(): Observable<EvolutionListResponse> {
    return this.http.get<EvolutionListResponse>('https://pokeapi.co/api/v2/pokemon');
  }
}