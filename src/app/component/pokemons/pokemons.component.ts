import { Component } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  pokemons: Pokemon[] = [];
  searchText: string = "";
  filteredPokemons: Pokemon[] = [];

  constructor(private router: Router, private pokService: PokemonService) {}

    ngOnInit(): void {
      this.pokService.getPokemons().then(val => {
        this.pokemons = val;
        this.filteredPokemons= val;
      });

    }

    onClick(pokemon:Pokemon){
      this.router.navigate(['/pokemon', pokemon.id]);
    }

    filterPokemons() : void{
      if (this.searchText.trim() === "") //delete spaces
      {
         this.filteredPokemons= this.pokemons;
      } else {
        const searchTerm = this.searchText.toLowerCase();
        this.filteredPokemons= this.pokemons.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm)
        );
      }
    }


}
