import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [];
  searchText: string = "";

  constructor(private router: Router, private pokService: PokemonService) {}

    ngOnInit(): void {
      this.pokService.getPokemons().then(val => {
        this.pokemons = val;
      });

    }

    onClick(pokemon:Pokemon){
      this.router.navigate(['/pokemon', pokemon.id]);
    }

    filterPokemons() {
      if (this.searchText.trim() === "") //delete spaces
      {
        return this.pokemons;
      } else {
        const searchTerm = this.searchText.toLowerCase();
        return this.pokemons.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm)
        );
      }
    }


}
