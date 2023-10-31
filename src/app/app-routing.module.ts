import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsInformationComponent } from './component/pokemons-information/pokemons-information.component';
import { PokemonsComponent } from './component/pokemons/pokemons.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonsComponent },
  { path: 'pokemon/:id', component: PokemonsInformationComponent },
  { path: 'login', component: LoginComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
