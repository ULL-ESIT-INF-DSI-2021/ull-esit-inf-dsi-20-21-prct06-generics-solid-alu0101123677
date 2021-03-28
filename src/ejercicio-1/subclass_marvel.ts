import {Fighter} from "./superclass_fighter";

export class Marvel extends Fighter {
  constructor(protected name: string, protected height: number, protected weight: number,
    protected attack: number, protected defense: number, protected catching_phrase: string){
    super(name, height, weight, attack, defense, catching_phrase);
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

  getCatchingPhrase() {
    return this.catching_phrase;
  }
}