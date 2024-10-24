import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../interfaces/pokemon.interface';
import { PokemonDetailResponse } from '../interfaces/pokemon-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/');
  }

  getOnePokemon(pokemonId: number): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }

  getPokemonDetail(id: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}