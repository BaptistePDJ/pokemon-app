import {Pokemon} from "./pokemon";

export class Fight {
    id: number;
    pokemons: Pokemon[];
    commentaries: string[];
    winner: Pokemon;

    startFight(): Pokemon {
        this.commentaries.push("Le match entre " + this.pokemons[0].name + ' et ' + this.pokemons[1].name + ' va commencer');
        while (this.pokemons[0].isAlive() && this.pokemons[1].isAlive())
        {
            const pokemonOrder: Pokemon[] = this.fastSort();
            this.commentaries.push(pokemonOrder[0].name + ' va attaqué en premier');
            pokemonOrder[0].attackOn(pokemonOrder[1]);
            this.commentaries.push(pokemonOrder[0].name + ' a attaqué ');
            if(!pokemonOrder[1].isAlive()) {
                this.winner = pokemonOrder[0];
                this.commentaries.push(pokemonOrder[0].name + ' a gagné');
                break;
            }
            pokemonOrder[1].attackOn(pokemonOrder[0]);
            this.commentaries.push(pokemonOrder[1].name + ' a attaqué ');
            if(!pokemonOrder[0].isAlive()) {
                this.winner = pokemonOrder[1];
                this.commentaries.push(pokemonOrder[1].name + ' a gagné');
                break;
            }
        }
        return this.winner;
    }
    fastSort(): Pokemon[] {
        return this.pokemons.sort(this.compare);
    }
    compare(poke1: Pokemon, poke2: Pokemon) {
        if (poke1.speed < poke2.speed) {
            return -1;
        }
        if (poke1.speed > poke2.speed) {
            return 1;
        }
        return Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    }
}