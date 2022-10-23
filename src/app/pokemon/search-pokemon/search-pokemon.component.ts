import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap, throwError } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  
  // Subject vient de RXJS
  // {..."a".."ab".."abz".."ab".."abc"...}
  searchTerms = new Subject<string>();
  // {...pokemonList(a)..pokemonList(ab)...}
  // $ = flux de données par convention (observable)
  pokemons$: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      // concatMap / mergeMap / switchMap
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    )
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link= ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
