import { Component, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardSubtitle,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage implements OnInit {
  modalActive: String = '';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /*_api = inject(ApiService);
  pokemonList: any[] = [];
  pokemonDetails: any;
 */
  /*  ngOnInit() {
    // Obtener la lista de Pokémon
    this._api.getPokemonList(10, 0).subscribe(data => {
      this.pokemonList = data.results;
      console.log(this.pokemonList);
    });

    // Obtener detalles de un Pokémon
    this._api.getPokemonDetails(1).subscribe(details => {
      this.pokemonDetails = details;
      console.log(this.pokemonDetails);
    });
  } */

  mostrarModal() {
    this.modalActive = 'shadow-modal--active';
  }

  ocultarModal() {
    this.modalActive = '';
  }
}
