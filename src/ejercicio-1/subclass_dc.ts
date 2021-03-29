import {Fighter} from "./superclass_fighter";

export class DC extends Fighter {
  constructor(protected name: string, protected height: number, protected weight: number,
    protected attack: number, protected defense: number, protected speed: number,
    protected healt: number, protected catching_phrase: string){
    super(name, height, weight, attack, defense, speed, healt, catching_phrase,);
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

  setName(name: string) {
    this.name = name;
  }

  setHeight(height: number) {
    this.height = height;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

  setAttack(attack: number) {
    this.attack = attack;
  }

  setDefense(defense: number) {
    this.defense = defense;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  setHealt(healt: number) {
    this.healt = healt;
  }

  setCatchingPhrase(catching_phrase: string) {
    this.catching_phrase = catching_phrase;
  }
}