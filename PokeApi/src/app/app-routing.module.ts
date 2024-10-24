import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { EvoListComponent } from './components/evo-list/evo-list.component';
import { RegListComponent } from './components/reg-list/reg-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {path: 'pokemons', component: PokeListComponent},
  {path: 'pokemon-detail/:id', component: PokemonDetailComponent },
  {path: 'evoluciones', component: EvoListComponent},
  {path: 'regiones', component: RegListComponent},
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }