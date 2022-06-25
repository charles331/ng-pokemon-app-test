import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-lists';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonList():Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId: number):Pokemon|undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
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
