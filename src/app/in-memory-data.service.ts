import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/mock-pokemon-lists';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{


  createDb() {
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
