import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { POKEMONS } from '../mock-pokemon-lists';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{

  //pokemonsList:Pokemon[] = POKEMONS;
  pokemonsList:Pokemon[] ;
  pokemonSelected:Pokemon|undefined;
  
  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(){
    this.pokemonService.getPokemonList()
      .subscribe(pokemonsList => this.pokemonsList = pokemonsList);
    //this.pokemonsList=this.pokemonService.getPokemonList();
  }


  //selectPokemon(event:MouseEvent){
  //selectPokemon(pokemonId:string){
    selectPokemon(pk:Pokemon){
      //const index: number=+(event?.target as HTMLInputElement).value
      //const index=+pokemonId;
      //console.warn(this.pokemonsList);
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
      this.router.navigate(['/pokemon',pk.id]);
    }


}
