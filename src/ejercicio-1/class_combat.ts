import {DC} from "./subclass_dc";
import {DragonBall} from "./subclass_dragonball";
import {Marvel} from "./subclass_marvel";
import {Pokemon} from "./subclass_pokemon";
import {StarWars} from "./subclass_starwars";
import {Fighter} from "./superclass_fighter"

export class Combat {
  constructor(private fighter1: Fighter, private fighter2: Fighter){}
  
  start() {
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

  fight(): number {
    let healt1: number = this.fighter1.getHealt();
    let healt2: number = this.fighter2.getHealt();
    let priority: number = this.priority();
    while (true) {
      if (priority == 1) {
        healt2 = healt2 - this.attack(this.fighter1, this.fighter2);
        if (healt2 <= 0)
          return 1;
        healt1 = healt1 - this.attack(this.fighter2, this.fighter1);
        if (healt1 <= 0)
          return 2;
      }
      else {
        healt1 = healt1 - this.attack(this.fighter2, this.fighter1);
        if (healt1 <= 0)
          return 2;
        healt2 = healt2 -this.attack(this.fighter1, this.fighter2);
        if (healt2 <= 0)
          return 1;
      }
    }
  }

  priority(): number {
    if (this.fighter1.getSpeed() >= this.fighter2.getSpeed())
      return 1;
    else
      return 2;
  }

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
  
  lowEfficiency(fighter1: Fighter, fighter2: Fighter): number {
    if (fighter1.getAttack() < 1)
      return 0;
    if (fighter2.getDefense() < 1)
      return 50 * fighter1.getAttack() * 0.5;
    return 50 * (fighter1.getAttack() / fighter2.getDefense()) * 0.5;
  }
  
  neutralEfficiency(fighter1: Fighter, fighter2: Fighter): number {
    if (fighter1.getAttack() < 1)
      return 0;
    if (fighter2.getDefense() < 1)
      return 50 * fighter1.getAttack();
    return 50 * (fighter1.getAttack() / fighter2.getDefense());
  }
  
  highEfficiency(fighter1: Fighter, fighter2: Fighter): number {
    if (fighter1.getAttack() < 1)
      return 0;
    if (fighter2.getDefense() < 1)
      return 50 * fighter1.getAttack() * 2;
    return 50 * (fighter1.getAttack() / fighter2.getDefense()) * 2;
  }
}
