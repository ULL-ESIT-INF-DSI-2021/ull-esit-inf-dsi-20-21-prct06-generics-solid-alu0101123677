import {Fighter} from "./superclass_fighter"
/**
 * Clase Plantel que sirve para guardar todos los luchadores que se van a usar
 * 
 * Se define 1 atributo, un vector de objetos de la Clase Fighter
 * 
 * Se tienen 3 métodos, getPlantel, choose y push.
 */
export class Plantel {
  constructor(private plantel: Fighter[]){}

  getPlantel(){
    return this.plantel;
  }
  
  /**
   * Función que nos escoge un luchador del vector de luchadores
   * @param fighter tipo string que indica el nombre del luchador a elegir
   * @returns objeto de la clase Fighter
   */
  choose(fighter: string): Fighter{
    for (let i = 0; i < this.plantel.length; i++){
      if (this.plantel[i].getName() == fighter)
        return this.plantel[i]
    }
  }
  /**
   * Función que introduce un luchador en el vector de luchadores
   * @param fighter objeto de la clase Fighter con el luchador a introducir
   * @returns un objeto de la clase FIghter
   */
  push(fighter: Fighter): Fighter{
    let position: number = this.plantel.length;
    this.plantel.push(fighter);
    return this.plantel[position];
  }
}