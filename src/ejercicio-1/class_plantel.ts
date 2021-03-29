import {Fighter} from "./superclass_fighter"

export class Plantel {
  constructor(private plantel: Fighter[]){}

  getPlantel(){
    return this.plantel;
  }

  choose(fighter: string): Fighter{
    for (let i = 0; i < this.plantel.length; i++){
      if (this.plantel[i].getName() == fighter)
        return this.plantel[i]
    }
  }

  push(fighter: Fighter): Fighter{
    let position: number = this.plantel.length;
    this.plantel.push(fighter);
    return this.plantel[position];
  }
}