import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {Fight} from "../fight";

@Component({
  selector: 'app-fight-form',
  templateUrl: './fight-form.component.html',
  styles: [
  ]
})
export class FightFormComponent implements OnInit {
  pokemons: Pokemon[];
  pokemonChoose: Pokemon|undefined;
  fight: Fight;
  constructor(private pokemonService: PokemonService, private router: Router) {
  }
  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(pokemons => this.pokemons = pokemons);
    this.fight = new Fight([this.pokemons[0], this.pokemons[0]]);
  }
  isFormValid() {
    return this.isPokemonValid(0) && this.isPokemonValid(1);
  }

  isPokemonValid(nbPoke: number):boolean {
    return this.fight.pokemons[nbPoke] != undefined;
  }

  selectPokemon($event: Event, nbPoke: number, idPoke: number) {
    //const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    this.pokemonService.getPokemonById(idPoke).subscribe(pokemon => this.pokemonChoose = pokemon);
    if (this.pokemonChoose != undefined) {
      this.fight.pokemons[nbPoke] = this.pokemonChoose;
    }
  }
  onSubmit() {

  }
}
