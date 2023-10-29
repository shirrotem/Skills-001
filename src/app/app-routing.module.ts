import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsInformationComponent } from './pokemons-information/pokemons-information.component';
import { PokemonsComponent } from './pokemons/pokemons.component';


const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemon/:id', component: PokemonsInformationComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
