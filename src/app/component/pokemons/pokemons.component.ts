import { Component } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [];
  searchText: string = "";
  filteredPokemons: Pokemon[] = [];
  pokemonsSubscription: Subscription | undefined;

  constructor(private router: Router, private pokService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonsSubscription = this.pokService.getPokemons().subscribe((val: Pokemon[]) => {
      this.pokemons = val;
      this.filteredPokemons = val;
    });
  }

  ngOnDestroy() {
    if (this.pokemonsSubscription) {
      this.pokemonsSubscription.unsubscribe();
    }
  }

  onClick(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

  filterPokemons(): void {
    if (this.searchText.trim() === "") {
      this.filteredPokemons = this.pokemons;
    } else {
      const searchTerm = this.searchText.toLowerCase();
      this.filteredPokemons = this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm)
      );
    }
  }
}



