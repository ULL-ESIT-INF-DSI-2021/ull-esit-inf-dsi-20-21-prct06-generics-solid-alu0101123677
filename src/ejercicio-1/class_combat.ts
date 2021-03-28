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
    return 1;
  }

  priority(): number {
    return
  }
  
  lowEfficiency(): number {
    if (this.fighter1.getAttack() < 1)
      return 0;
    if (this.fighter2.getDefense() < 1)
      return 50 * this.fighter1.getAttack() * 0.5;
    return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * 0.5;
  }
  
  neutralEfficiency(): number {
    if (this.fighter1.getAttack() < 1)
      return 0;
    if (this.fighter2.getDefense() < 1)
      return 50 * this.fighter1.getAttack();
    return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense());
  }
  
  highEfficiency(): number {
    if (this.fighter1.getAttack() < 1)
      return 0;
    if (this.fighter2.getDefense() < 1)
      return 50 * this.fighter1.getAttack() * 2;
    return 50 * (this.fighter1.getAttack() / this.fighter2.getDefense()) * 2;
  }
}
