import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvoListComponent } from './components/evo-list/evo-list.component';

const routes: Routes = [
  {path: 'evoluciones', component: EvoListComponent},
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }