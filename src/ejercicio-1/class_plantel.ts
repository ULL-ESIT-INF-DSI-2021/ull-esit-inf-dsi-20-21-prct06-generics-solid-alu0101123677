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
}