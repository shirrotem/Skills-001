import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemons-information',
  templateUrl: './pokemons-information.component.html',
  styleUrls: ['./pokemons-information.component.scss']
})
export class PokemonsInformationComponent {
  pokemonId: number = 0;
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemonId = +params['id'];
      this.pokemon = this.pokemonService.getPokemonById(this.pokemonId);
    });
  }
}
