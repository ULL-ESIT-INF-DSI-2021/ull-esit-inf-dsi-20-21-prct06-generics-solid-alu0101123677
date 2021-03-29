import {DC} from "./subclass_dc";
import {DragonBall} from "./subclass_dragonball";
import {Marvel} from "./subclass_marvel";
import {Pokemon} from "./subclass_pokemon";
import {StarWars} from "./subclass_starwars";
import {Fighter} from "./superclass_fighter"
/**
 * Clase Combat que sirve para llevar el combate entre luchadores
 * 
 * Se define 2 atributos, dos objetos de la clase Fighter.
 * 
 * Se tienen 7 métodos, start, fight, priority, attack, lowEfficiency, neutralEfficiency y highEfficiency.
 */
export class Combat {
  constructor(private fighter1: Fighter, private fighter2: Fighter){}
  
  /**
   * Función interfaz que informa que se empieza el combate y que se termina asi como el ganador
   * @returns un tipo string con el nombre del ganador
   */
  start(): string {
    console.log("¡¡¡El COMBATE EMPIEZA!!!");
    console.log(`Los combatientes son: ${this.fighter1.getName()} y ${this.fighter2.getName()}`);
    let winner :number = this.fight();
    if (winner == 1) {
      console.log(`El combate ha terminado, el ganador es ${this.fighter1.getName()}`);
      return this.fighter1.getName();
    }
    if (winner == 2) {
      console.log(`El combate ha terminado, el ganador es ${this.fighter2.getName()}`);
      return this.fighter2.getName();
    }
  }
  
  /**
   * Función que sirve para llevar acabo el combate
   * @returns un tipo number que indica que luchador a ganado
   */
  fight(): number {
    let healt1: number = this.fighter1.getHealt();
    let healt2: number = this.fighter2.getHealt();
    let priority: number = this.priority();
    while (true) {
      if (priority == 1) {
        healt2 = healt2 - this.attack(this.fighter1, this.fighter2);
        console.log(`A ${this.fighter2.getName()} le queda ${healt2} puntos de vida`);
        if (healt2 <= 0)
          return 1;
        healt1 = healt1 - this.attack(this.fighter2, this.fighter1);
        console.log(`A ${this.fighter1.getName()} le queda ${healt1} puntos de vida`);
        if (healt1 <= 0)
          return 2;
      }
      else {
        healt1 = healt1 - this.attack(this.fighter2, this.fighter1);
        console.log(`A ${this.fighter1.getName()} le queda ${healt1} puntos de vida`);
        if (healt1 <= 0)
          return 2;
        healt2 = healt2 -this.attack(this.fighter1, this.fighter2);
        console.log(`A ${this.fighter2.getName()} le queda ${healt2} puntos de vida`);
        if (healt2 <= 0)
          return 1;
      }
      console.log('');
    }
  }
  
  /**
   * Función que establece la prioridad de ataque de ambos luchadores
   * @returns un tipo number para indicar que prioridad entre los luchadores se debe llevar a acabo
   */
  priority(): number {
    if (this.fighter1.getSpeed() >= this.fighter2.getSpeed())
      return 1;
    else
      return 2;
  }
  
  /**
   * Función utilizada para saber con que efectividad tiene que atacar el luchador 1 al luchador 2
   * @param fighter1 Objeto de la clase Fighter que indica el luchador que ataca
   * @param fighter2 Objeto de la clase Fighter que indica el luchador que recibe el daño
   * @returns un tipo number con el daño causado
   */
  attack(fighter1: Fighter, fighter2: Fighter): number {
    let damage: number = 0;
    if (fighter1 instanceof Pokemon) {
      if (fighter2 instanceof Pokemon)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof StarWars)
        damage = this.lowEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DC)
        damage = this.lowEfficiency(fighter1, fighter2);
      if (fighter2 instanceof Marvel)
        damage = this.lowEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DragonBall)
        damage = this.lowEfficiency(fighter1, fighter2);
    }

    if (fighter1 instanceof DragonBall) {
      if (fighter2 instanceof Pokemon)
        damage = this.highEfficiency(fighter1, fighter2);
      if (fighter2 instanceof StarWars)
        damage = this.highEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DC)
        damage = this.highEfficiency(fighter1, fighter2);
      if (fighter2 instanceof Marvel)
        damage = this.lowEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DragonBall)
        damage = this.neutralEfficiency(fighter1, fighter2);
    }

    if (fighter1 instanceof Marvel) {
      if (fighter2 instanceof Pokemon)
        damage = this.highEfficiency(fighter1, fighter2);
      if (fighter2 instanceof StarWars)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DC)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof Marvel)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DragonBall)
        damage = this.highEfficiency(fighter1, fighter2);
    }

    if (fighter1 instanceof StarWars) {
      if (fighter2 instanceof Pokemon)
        damage = this.highEfficiency(fighter1, fighter2);
      if (fighter2 instanceof StarWars)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DC)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof Marvel)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DragonBall)
        damage = this.lowEfficiency(fighter1, fighter2);
    }

    if (fighter1 instanceof DC) {
      if (fighter2 instanceof Pokemon)
        damage = this.highEfficiency(fighter1, fighter2);
      if (fighter2 instanceof StarWars)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DC)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof Marvel)
        damage = this.neutralEfficiency(fighter1, fighter2);
      if (fighter2 instanceof DragonBall)
        damage = this.lowEfficiency(fighter1, fighter2);
    }
    
    console.log(`${fighter1.getName()} ataca y hace ${Math.round(damage)} puntos de daño: ${fighter1.getCatchingPhrase()}`);
    return Math.round(damage);
  }
  
  /**
   * Función utilizada para calcular el daño si el ataque es poco efectivo
   * @param fighter1 Objeto de la clase Fighter que indica el luchador que ataca
   * @param fighter2 Objeto de la clase Fighter que indica el luchador que recibe el daño
   * @returns un tipo number con el daño causado
   */
  lowEfficiency(fighter1: Fighter, fighter2: Fighter): number {
    if (fighter1.getAttack() < 1)
      return 0;
    if (fighter2.getDefense() < 1)
      return 50 * fighter1.getAttack() * 0.5;
    return 50 * (fighter1.getAttack() / fighter2.getDefense()) * 0.5;
  }
  
  /**
   * Función utilizada para calcular el daño si el ataque es neutral en efectividad
   * @param fighter1 Objeto de la clase Fighter que indica el luchador que ataca
   * @param fighter2 Objeto de la clase Fighter que indica el luchador que recibe el daño
   * @returns un tipo number con el daño causado
   */
  neutralEfficiency(fighter1: Fighter, fighter2: Fighter): number {
    if (fighter1.getAttack() < 1)
      return 0;
    if (fighter2.getDefense() < 1)
      return 50 * fighter1.getAttack();
    return 50 * (fighter1.getAttack() / fighter2.getDefense());
  }
  
  /**
   * Función utilizada para calcular el daño si el ataque es efectivo
   * @param fighter1 Objeto de la clase Fighter que indica el luchador que ataca
   * @param fighter2 Objeto de la clase Fighter que indica el luchador que recibe el daño
   * @returns un tipo number con el daño causado
   */
  highEfficiency(fighter1: Fighter, fighter2: Fighter): number {
    if (fighter1.getAttack() < 1)
      return 0;
    if (fighter2.getDefense() < 1)
      return 50 * fighter1.getAttack() * 2;
    return 50 * (fighter1.getAttack() / fighter2.getDefense()) * 2;
  }
}
