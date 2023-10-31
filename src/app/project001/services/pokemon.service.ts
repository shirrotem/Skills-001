import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonsUrlObject } from '../model/pokemonsUrlObject';
import { PokemonResponse } from '../model/pokemonResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemons: Pokemon[] = [];
  private pokenonsTypes: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.fetchPokemonList().pipe(
      switchMap(arrayOfUrls => {
        const fetchPromises = arrayOfUrls.map((pokemonObj: PokemonsUrlObject) => {
          return this.fetchPokemonData(pokemonObj.url);
        });
        return forkJoin(fetchPromises);
      }),
      catchError((error: any) => {
        console.error("An error occurred:", error);
        return [];
      })
    );
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.getPokemons().pipe(
      map(pokemons => pokemons.find(pokemon => pokemon.id === id))
    );
  }

  private fetchPokemonList(): Observable<any[]> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100").pipe(
      catchError((error: any) => {
        console.error("An error occurred:", error);
        return [];
      }),
      map((response: any) => response.results)
    );
  }

  private fetchPokemonData(url: string): Observable<Pokemon> {
    return this.http.get<PokemonResponse>(url).pipe(
      catchError((error: any) => {
        console.error("An error occurred:", error);
        return new Observable<PokemonResponse>();
      }),
      map((pokData: PokemonResponse) => {
        const typesArray = pokData.types.map((typObj: any) => typObj.type.name);
        typesArray.forEach(type=>
          {
            if(!this.pokenonsTypes.includes(type))
            {
              this.pokenonsTypes.push(type);
            }
          });
        return new Pokemon(
          pokData.name,
          pokData.id,
          pokData.sprites.back_default,
          pokData.height,
          pokData.weight,
          pokData.base_experience,
          typesArray
        );  
      })
    );
  }

  getPokemonsTypes(): string[]{
    return this.pokenonsTypes;

  }

  checkAuthentication( ) :void {
    const isLoggedIn = localStorage.getItem('loggedin');
    if(isLoggedIn!=="true")
      this.router.navigate(['/login']);
  }
}







