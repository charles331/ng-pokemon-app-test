import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer le {{ pokemon?.name }}</h2>
    
    <p *ngIf="pokemon" class="center">      
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
    
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
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      
    } else {
      this.pokemon = undefined;
    }

  }

}
