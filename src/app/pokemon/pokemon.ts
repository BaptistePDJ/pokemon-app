export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    speed: number;
    attack: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    constructor(
        name: string = 'Entrer un nom',
        hp: number = 100,
        cp: number = 0,
        speed: number = 50,
        attack: number = 60,
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: string[] = ['Normal'],
        created: Date = new Date()
    ) {
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.speed = speed;
        this.attack = attack;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
    isAlive(): boolean {
        return this.hp > this.cp;
    }

    attackOn(target: Pokemon): string {
        target.cp = target.cp - this.attack;
        return target.name + 'a pris ' + this.attack + ' dégâts';
    }
}