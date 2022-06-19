import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-lists';
import { Pokemon } from './pokemon';

//https://www.alexandria-library.co/ressources-angular/


@Component({
  selector: 'app-root',
  template:`<h1>Liste de Pokémons:</h1>
  <br>`
})

export class AppComponent implements OnInit{
  //pokemonsList = ['Bulbizarre','Salamèche','Carapuce'];
  pokemonsList:Pokemon[] = POKEMONS;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.table(this.pokemonsList)
    this.selectPokemon(this.pokemonsList[10]);

  }

selectPokemon(pokemon:Pokemon){
  // JS ES6 angular backtick string variable
  console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`); 
  // JS ES5 old version
  console.log('Vous avez cliqué sur le pokémon ' + pokemon.name);
}

}
