import {Fighter} from "./superclass_fighter"

export class Combat {
  constructor(private fighter1: Fighter, private fighter2: Fighter){}

  fight(){

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
