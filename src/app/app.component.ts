import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-lists';
import { Pokemon } from './pokemon';

//https://www.alexandria-library.co/ressources-angular/


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})

export class AppComponent implements OnInit{
  //pokemonsList = ['Bulbizarre','Salamèche','Carapuce'];
  pokemonsList:Pokemon[] = POKEMONS;
  pokemonSelected:Pokemon|undefined;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.table(this.pokemonsList)
    //this.selectPokemon(this.pokemonsList[10]);
  }

  //selectPokemon(event:MouseEvent){
  //selectPokemon(pokemonId:string){
    selectPokemon(pk:Pokemon){
  //const index: number=+(event?.target as HTMLInputElement).value
  //const index=+pokemonId;
  const pokemon: Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id == +pk.id);

  // JS ES6 angular backtick string variable
  //console.log(`Vous avez cliqué sur le pokémon ${this.pokemonsList[index].name}`); 
  if(pokemon){
    console.log(`Vous avez demandé le pokémon ${pokemon.name}`); 
    //this.pokemonSelected=this.pokemonsList[index];
    this.pokemonSelected=pokemon;
  } else {
    console.log(`Vous avez demandé un pokémon qui n'existe pas`); 
    this.pokemonSelected=undefined;
  }

  // JS ES5 old version
  // console.log('Vous avez cliqué sur le pokémon ' + pokemon.name);
}

}
