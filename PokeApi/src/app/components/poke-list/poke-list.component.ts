import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';
@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent {
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((resp) => {
      this.pokemonList = resp.results;
    });
  }
}
