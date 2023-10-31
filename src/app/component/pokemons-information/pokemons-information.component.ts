import { Component, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemons-information',
  templateUrl: './pokemons-information.component.html',
  styleUrls: ['./pokemons-information.component.scss']
})
export class PokemonsInformationComponent {
  pokemonId: number = 0;
  pokemon: Pokemon | undefined;
  pokemonSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonSubscription = this.route.params.pipe(
      map(params => +params['id']),
      switchMap(id => this.pokemonService.getPokemonById(id))
    ).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
    this.pokemonService.checkAuthentication();
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }
}


