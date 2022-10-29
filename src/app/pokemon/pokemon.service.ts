
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, from, Observable, of, tap } from 'rxjs';
//import { POKEMONS } from './mock-pokemon-lists';
import { Pokemon } from './pokemon';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CollectionReference, Firestore, Query, Timestamp } from '@angular/fire/firestore';

@Injectable()
export class PokemonService {

  private itemsCollection: AngularFirestoreCollection<Pokemon>;
  private itemDoc: AngularFirestoreDocument<Pokemon>;

  constructor(private http: HttpClient,
    private afs: AngularFirestore) { }

/**getPokemonList():Pokemon[]{
  *  return POKEMONS;
  *}
**/
  // utilisation programmation réactive
  // import { catchError, Observable, of, tap } from 'rxjs';
  // https://rxjs.dev/api/operators/tap
  
  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemon) =>  this.log(pokemon)),
      catchError((error) => this.handleError(error,[]))
    )
  }

  /**
   * https://github.com/angular/angularfire/issues/2985
   * https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
   * https://github.com/angular/angularfire/blob/master/docs/firestore/collections.md
   * 
   * @returns 
   */
  getPokemonListAfs(): Observable<Pokemon[]>{
    this.itemsCollection = this.afs.collection<Pokemon>('pokemons');
    //console.warn(this.itemsCollection);
    return this.itemsCollection.valueChanges({ idField: 'customID' });
  }

  getPokemonByIdAfs(pokemonId: number):Observable<Pokemon|undefined>{
    //console.warn('`pokemons/${pokemonId}` = ' + `pokemons/${pokemonId}`);
    this.itemDoc = this.afs.doc<Pokemon>(`pokemons/${pokemonId}`);
    return this.itemDoc.valueChanges({ idField: 'customID' });
  }
  getPokemonByIdAfss(pokemonId: string):Observable<Pokemon|undefined>{
    //console.warn('`pokemons/${pokemonId}` = ' + `pokemons/${pokemonId}`);
    this.itemDoc = this.afs.doc<Pokemon>(`pokemons/${pokemonId}`);
    return this.itemDoc.valueChanges({ idField: 'customID' });
  }

  addPokemonAfs(pokemon: Pokemon): Observable<Pokemon>{
    //console.warn('insert AFS pokemon');
    //console.warn(pokemon);

    this.itemsCollection = this.afs.collection<Pokemon>('pokemons');
    const afsId = this.afs.createId();
    //console.warn('afsId=' + afsId);
    
    pokemon.customID=afsId;
    pokemon.id=2;
    //pokemon.hp=2;
    //pokemon.cp=2;
    //pokemon.name='Charles';
    //pokemon.bordercolor='';
    //pokemon.picture='';
    //pokemon.types=['Normal'];
    //pokemon.created=new Date;

    //this.itemsCollection.doc("1").set(pokemon);
    //{ name: 'item', price: 10 }
    //this.itemsCollection.add({ id: 2,hp: 2,cp: 2,name: 'item',picture: '',types: ['Normal'],created: new Date });
    //this.itemsCollection.add(pokemon);
    //console.warn(pokemon);
    this.itemsCollection.doc(afsId).set({ 
      customID: pokemon.customID,
      id: pokemon.id,
      hp: pokemon.hp,
      cp: pokemon.cp,
      name: pokemon.name,
      picture: pokemon.picture,
      types: pokemon.types,
      created: pokemon.created
    });
    
    //this.afs.collection<Pokemon>('pokemons').doc(`${pokemon.id}`).set(pokemon);
    return of(pokemon);
  }

  updatePokemonAfs(pokemon: Pokemon): Observable<Pokemon|undefined>{
    //console.warn('updatePokemonAfs');
    this.itemDoc = this.afs.doc<Pokemon>(`pokemons/${pokemon.customID}`);
    this.itemDoc.set({
      customID: pokemon.customID,
      id: pokemon.id,
      hp: pokemon.hp,
      cp: pokemon.cp,
      name: pokemon.name,
      picture: pokemon.picture,
      types: pokemon.types,
      created: Timestamp.now()
    })
    return this.itemDoc.valueChanges();
  }

  //https://javascript.plainenglish.io/how-to-do-crud-with-query-operations-in-firebase-with-firestore-angular-ionic-web-9c9e3db4ce72

  searchPokemonListAfs(term: string): Observable<Pokemon[]> {
    if(term.length<=1){
      return of([]);
    }
    // https://www.makeuseof.com/angular-firebase-complex-queries/
    // https://stackoverflow.com/questions/46568142/google-firestore-query-on-substring-of-a-property-value-text-search
    /**
     * The character \uf8ff used in the query is a very high code point in the Unicode range (it is a Private Usage Area [PUA] code).
     * Because it is after most regular characters in Unicode,
     * the query matches all values that start with queryText.
     */
    this.itemsCollection = this.afs.collection<Pokemon>('pokemons', ref => 
    ref.where('name', '>=', term)
    .where('name', '<=', term + '\uf8ff')
    .limit(3))

    return this.itemsCollection.valueChanges({ idField: 'customID' });
  }

  deletePokemonByIdAfs(pokemonId: string): Observable<void>{
    //return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
     // tap((response) => this.log(response)),
      //catchError((error) => this.handleError(error,null))
    //);

    //console.warn("deletePokemonByIdAfs pokemonId=" + pokemonId);
    this.itemDoc = this.afs.doc<Pokemon>(`pokemons/${pokemonId}`);

    //https://firebase.google.com/docs/firestore/manage-data/delete-data
    //https://stackoverflow.com/questions/47422225/deleting-docs-in-a-collection-using-angular-in-firestore
    //https://stackoverflow.com/questions/39319279/convert-promise-to-observable

    const observable = from(this.itemDoc.delete()
    .catch((error) => this.handleError(error,null))
    .then((response) => this.log(response)));

    //console.warn("deletePokemonByIdAfs end");

    return observable;
    //return this.itemDoc.valueChanges({ idField: 'customID' });
  }



  /**getPokemonById(pokemonId: number):Pokemon|undefined{
  *  return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  *}
  **/
  getPokemonById(pokemonId: number):Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) =>  this.log(pokemon)),
      catchError((error) => this.handleError(error,undefined))
    )
  }



  /**
   * Search terl pokemon
   * @param term
   * @returns 
   */
  searchPokemonList(term: string): Observable<Pokemon[]> {
    if(term.length<=1){
      return of([]);
    }
    return this.http.get<Pokemon>(`api/pokemons/?name=${term}`).pipe(
      tap((pokemon) =>  this.log("searchPokemonList = " + pokemon)),
      catchError((error) => this.handleError(error,[]))
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

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    );
  }
/**
 * Delete a pokemon
 * 
 * @param pokemonId 
 * @returns 
 */
  deletePokemonById(pokemonId: number): Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    );
  }

  /**
   * Add a pokemon
   * 
   * @param pokemon
   * @returns 
   */
  addPokemon(pokemon: Pokemon): Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,null))
    );
  }



  // refactor log
  //private log(response: Pokemon[]|Pokemon|undefined) {
  private log(response: any) {
    //console.table(response);
  }

  // refactor error
  private handleError(error: Error, errorValue: any){
    //console.error(error);
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
