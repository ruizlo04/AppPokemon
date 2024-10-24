import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((resp) => {
      this.pokemonList = resp.results;
    });
  }

  getPokemonId(url: string): number {
    const parts = url.split('/').filter(part => part);
    const id = parts[parts.length - 1];
    return parseInt(id, 10);
  }

  getPokemonImageUrl(url: string): string {
    const id = this.getPokemonId(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  trackByUrl(index: number, item: Pokemon): string {
    return item.url;
  }
}