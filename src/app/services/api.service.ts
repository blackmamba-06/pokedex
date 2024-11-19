import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlPokemons : String = "https://pokeapi.co/api/v2/pokemon/";
  urlTypePokemons : String = "https://pokeapi.co/api/v2/type/";
  urlInfoPokemons : String = "https://pokeapi.co/api/v2/pokemon-species/";
  urlImgPokemonDetail : String = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  urlImgPokemonFull : String = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

  _http = inject(HttpClient);

  getPokemonList() : Observable<any> {
    return this._http.get<any>(`${this.urlPokemons}`);
  }

  /**
   * Obtiene los detalles de un Pokémon por su nombre o ID.
   * @param idOrName Nombre o ID del Pokémon.
   * @returns Observable con los detalles del Pokémon.
   */
  getPokemonDetails(): Observable<any> {
    return this._http.get<any>(`${this.urlPokemons}`);
  }


}
