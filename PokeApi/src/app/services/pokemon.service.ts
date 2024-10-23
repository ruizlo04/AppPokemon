import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PokemonListResponse } from '../interfaces/pokemon.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/');
  }
}