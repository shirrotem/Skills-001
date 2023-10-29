import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons: Pokemon[] = [];

  async getPokemons(): Promise<Pokemon[]> {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const arrayOfUrls = data.results;

      const fetchPromises = arrayOfUrls.map(async (pokemonObj: any) => {
        try {
          const pokResponse = await fetch(pokemonObj.url);
          if (!pokResponse.ok) {
            throw new Error(`HTTP error! Status: ${pokResponse.status}`);
          }
          const pokData = await pokResponse.json();
          const typesArray = pokData.types.map((typObj: any) => typObj.type.name);
          const pokemon = new Pokemon(pokData.name, pokData.id, pokData.sprites.back_default, pokData.height, pokData.weight, pokData.base_experience, typesArray);
          return pokemon;
        } catch (error) {
          console.error("An error occurred:", error);
          return null;
        }
      });

      this.pokemons = await Promise.all(fetchPromises);
    } catch (error) {
      console.error("An error occurred:", error);
    }

    return this.pokemons;
  }

  getPokemonById(id:number): Pokemon | undefined
  {
    return this.pokemons.find(pokemon=> pokemon.id === id);

  }


}
