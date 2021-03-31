import {Fighter} from "./superclass_fighter";
/**
 * subclase StarWars de la superclase Fighter.
 * 
 * Se define 8 atributos: dos tipo string, name y catching_phrase; y 6 de tipo number
 * height, weight, attack, defense, speed y healt. Cada atributo se autodefinen.
 * 
 * Se tienen 16 métodos, 6 métodos getters y 6 métodos setters.
 */
export class StarWars extends Fighter {
  constructor(protected name: string, protected height: number, protected weight: number,
    protected attack: number, protected defense: number, protected speed: number,
    protected healt: number, protected catching_phrase: string){
    super(name, height, weight, attack, defense, speed, healt, catching_phrase);
  }

  getName(): string {
    return this.name;
  }

  getHeight(): number {
    return this.height;
  }

  getWeight(): number {
    return this.weight;
  }

  getAttack(): number {
    return this.attack;
  }

  getDefense(): number {
    return this.defense;
  }

  getSpeed(): number {
    return this.speed;
  }

  getHealt(): number {
    return this.healt;
  }

  getCatchingPhrase(): string {
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