import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 *ngIf="pokemon" class="center">Editer le {{ pokemon.name }}</h2>
    
    <p *ngIf="pokemon" class="center">      
      <img [src]="pokemon.picture">
    </p>

    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>

    <h3 *ngIf="!pokemon" class="center">
    <app-loader></app-loader>
    </h3>
    
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId) {
      //this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon);
      
    } else {
      this.pokemon = undefined;
    }

  }

}
