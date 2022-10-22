import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { POKEMONS } from '../mock-pokemon-lists';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  //pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    //this.pokemonList=this.pokemonService.getPokemonList();
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      //this.pokemon= this.pokemonList.find(pokemon => pokemon.id == +pokemonId);      
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
      //this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } 
    //else {
    //  this.pokemon= undefined;
    //}
    console.log(`Pokemon found ${this.pokemon?.name}`);
  
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon){
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }

}
