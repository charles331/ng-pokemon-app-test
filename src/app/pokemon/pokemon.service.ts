
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
//import { POKEMONS } from './mock-pokemon-lists';
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
      tap((pokemon) =>  this.log(pokemon)),
      catchError((error) => this.handleError(error,[]))
    )
  }

  /**getPokemonById(pokemonId: number):Pokemon|undefined{
  *  return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  *}
  **/

  getPokemonById(pokemonId: number):Observable<Pokemon|undefined>{
    return this.Http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) =>  this.log(pokemon)),
      catchError((error) => this.handleError(error,undefined))
    )
  }

  // refactor log
  private log(response: Pokemon[]|Pokemon|undefined) {
    console.table(response);
  }
  
  // refactor error
  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
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
