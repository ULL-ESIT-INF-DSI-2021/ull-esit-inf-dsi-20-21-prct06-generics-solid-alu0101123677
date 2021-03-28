import {Fighter} from "./superclass_fighter";

export class StarWars extends Fighter {
  constructor(protected name: string, protected height: number, protected weight: number,
    protected attack: number, protected defense: number, protected speed: number,
    protected healt: number, protected catching_phrase: string){
    super(name, height, weight, attack, defense, speed, healt, catching_phrase);
  }

  getName() {
    return this.name;
  }

  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }

  getAttack() {
    return this.attack;
  }

  getDefense() {
    return this.defense;
  }

  getSpeed() {
    return this.speed;
  }

  getHealt() {
    return this.healt;
  }

  getCatchingPhrase() {
    return this.catching_phrase;
  }
}