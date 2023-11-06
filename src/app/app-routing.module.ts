import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsInformationComponent } from './project001/component/pokemons-information/pokemons-information.component';
import { PokemonsComponent } from './project001/component/pokemons/pokemons.component';
import { LoginComponent } from './project001/component/login/login.component';
import { MyMapComponent } from './project002/component/my-map/my-map.component';
import { MainPageComponent } from './main-page/main-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonsComponent },
  { path: 'pokemon/:id', component: PokemonsInformationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MyMapComponent },
  { path: 'main-page', component: MainPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
