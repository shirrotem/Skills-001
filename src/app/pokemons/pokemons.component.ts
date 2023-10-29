import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {

  pokemons: Pokemon[]= [];
    async ngOnInit(): Promise<void> {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        const arrayOfUrls = data.results;
        arrayOfUrls.forEach(async (pokemonObj: any) => {
          try{
            const pokResponse = await fetch(pokemonObj.url);
            if (!pokResponse.ok) {
              throw new Error(`HTTP error! Status: ${pokResponse.status}`);
            }
            const pokData = await pokResponse.json();
            const typesArray= pokData.types.map((typObj:any)=> typObj.type.name);
            const pokemon = new Pokemon(pokData.name, pokData.id, pokData.sprites.back_default, pokData.height, pokData.weight, pokData.base_experience, typesArray);
            this.pokemons.push(pokemon);
          }
          catch(error) {
            console.error("An error occurred:", error);
          }
          

        });





      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
}
