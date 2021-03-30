import {isConvertible} from './interface_isConvertible';

/**
 * Clase Speed que sirve para realizar las conversiones de la magnitud de velocidad
 * 
 * Se define 2 atributos, valor de tipo number que representa el valor númerico
 * y unidad1 de tipo string que define la en que unidad se encuentra.
 * 
 * Se tienen 5 métodos, getValor, getUnidad1, setValor, setUnidad1 y conversion.
 * 
 * Se ha implementado para que se haga las siguientes conversiones:
 *   -kilometro por hora -> metro por segundo
 *   -kilometro por hora -> milla por hora
 *   -metro por segundo -> kilometro por hora
 *   -milla por hora -> kilometro por hora
 */
export class Speed implements isConvertible<number, string> {
    constructor(private valor: number, private unidad1: string){}
    
    getValor() {
      return this.valor;
    }
  
    getUnidad1() {
      return this.unidad1;
    }
  
    setValor(valor: number) {
      this.valor = valor;
    }
  
    setUnidad1(unidad1: string) {
      this.unidad1 = unidad1;
    }
    
    /**
    * Función utilizada para realizar las conversiones de la magnitud velocidad
    * @param unidad2 de tipo string utilzada para saber a que tipo de unidad hacer la conversión
    * @returns un tipo number que indica la conversión
    */
    conversion(unidad2: string): number {
      if (this.unidad1 == "kilometro por hora") {
        if (unidad2 == "kilometro por hora")
          return this.valor;
        if (unidad2 == "milla por hora")
          return this.valor / 1.609;
        if (unidad2 == "metro por segundo")
          return this.valor / 3.6;
      }
  
      if (this.unidad1 == "milla por hora") {
        if (unidad2 == "kilometro por hora")
          return this.valor * 1.609;
        if (unidad2 == "milla por hora")
          return this.valor;
      }
  
      if (this.unidad1 == "metro por segundo") {
        if (unidad2 == "kilometro por hora")
          return this.valor * 3.6;
        if (unidad2 == "metro por segundo")
          return this.valor;
      }
      return 0;
    }
  }