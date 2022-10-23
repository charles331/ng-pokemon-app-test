
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.Http.get<Pokemon[]>('api/pokemons').pipe(
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

  /**
   * Update a pokemon
   * @param pokemon
   * @returns 
   */
  //updatePokemon(pokemon: Pokemon): Observable<Pokemon|undefined>{
    updatePokemon(pokemon: Pokemon): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.Http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.Http.delete(`api/pokemons/${pokemonId}`, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    );
  }

  // refactor log
  //private log(response: Pokemon[]|Pokemon|undefined) {
  private log(response: any) {
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
