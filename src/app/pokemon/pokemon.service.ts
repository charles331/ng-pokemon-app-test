
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemon-lists';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {



  constructor(private Http: HttpClient) { }

/**getPokemonList():Pokemon[]{
  *  return POKEMONS;
  *}
**/
  // utilisation programmation réactive
  // import { catchError, Observable, of, tap } from 'rxjs';
  // https://rxjs.dev/api/operators/tap
  
  getPokemonList(): Observable<Pokemon[]>{
    return this.Http.get<Pokemon[]>('api/pokemon').pipe(
      tap((pokemontList) =>  console.table(pokemontList)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    )
  }

  /**getPokemonById(pokemonId: number):Pokemon|undefined{
  *  return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  *}
  **/

  getPokemonById(pokemonId: number):Observable<Pokemon|undefined>{
    return this.Http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemont) =>  console.log(pokemont)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    )
  }

  getPokemonTypeList(): string[] {
    return ['Plante',
             'Feu',
             'Eau',
             'Insecte',
             'Normal',
             'Electrik',
             'Poisson',
             'Fée',
             'Vol',
             'Combat',
             'Psy'
  ]
  }
}
