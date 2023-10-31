import { Component } from '@angular/core';
import { Pokemon } from '../../model/pokemon';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/project001/services/pokemon.service';
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
  pokemonsSearches: string[]=[];
  sizePokemonsSearches: number=5;
  
  selectedType: string="";
  uniqueTypes: string[]=[];

  

  constructor(private router: Router, private pokService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonsSubscription = this.pokService.getPokemons().subscribe((val: Pokemon[]) => {
      this.pokemons = val;
      this.filteredPokemons = val;
    });

    const existingSearchesJSON = localStorage.getItem('pokemonSearch');
    this.pokemonsSearches = existingSearchesJSON ? JSON.parse(existingSearchesJSON) : [];

    this.pokService.checkAuthentication();
    this.uniqueTypes= this.pokService.getPokemonsTypes();
    
    

  }

  ngOnDestroy() {
    if (this.pokemonsSubscription) {
      this.pokemonsSubscription.unsubscribe();
    }
  }

  onClick(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);

    const existingSearchesJSON = localStorage.getItem('pokemonSearch');
    const existingSearches = existingSearchesJSON ? JSON.parse(existingSearchesJSON) : [];
    
    existingSearches.push(pokemon.name);

    if(existingSearches.length > this.sizePokemonsSearches){
      existingSearches.shift();
    }
    
    localStorage.setItem('pokemonSearch', JSON.stringify(existingSearches));

    this.pokemonsSearches= existingSearches;
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
    if(this.selectedType !== "" ){
      this.filteredPokemons= this.filteredPokemons.filter(pokemon=>
        pokemon.types.includes(this.selectedType));
    }

  }
}



