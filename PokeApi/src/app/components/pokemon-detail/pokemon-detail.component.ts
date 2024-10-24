import { Component, OnInit } from '@angular/core';
import { PokemonDetailResponse } from '../../interfaces/pokemon-detail.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonDetail: PokemonDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const pokemonId = id ? parseInt(id, 10) : null;
    
    if (pokemonId !== null) {
      this.pokemonService.getOnePokemon(pokemonId).subscribe(response => {
        this.pokemonDetail = response;
      });
    }
  }
}