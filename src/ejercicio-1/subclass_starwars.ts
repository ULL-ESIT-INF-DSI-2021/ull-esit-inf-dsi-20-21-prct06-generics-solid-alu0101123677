import {Fighter} from "./superclass_fighter";

export class StarWars extends Fighter {
  constructor(protected name: string, protected height: number, protected weight: number,
    protected attack: number, protected defense: number, protected catching_phrase: string){
    super(name, height, weight, attack, defense, catching_phrase);
  }
}