import {isConvertible} from './interface_isConvertible';

/**
 * Clase Time que sirve para realizar las conversiones de la magnitud de tiempo
 * 
 * Se define 2 atributos, valor de tipo number que representa el valor númerico
 * y unidad1 de tipo string que define la en que unidad se encuentra.
 * 
 * Se tienen 5 métodos, getValor, getUnidad1, setValor, setUnidad1 y conversion.
 * 
 * Se ha implementado para que se haga las siguientes conversiones:
 *   -hora -> minuto
 *   -hora -> segundo
 *   -minuto -> hora
 *   -minuto -> segundo
 *   -segundo -> hora
 *   -segundo -> minuto
 */
export class Time implements isConvertible<number, string> {
  constructor(private valor: number, private unidad1: string){}
    
  getValor(): number {
    return this.valor;
  }
  
  getUnidad1(): string {
    return this.unidad1;
  }
  
  setValor(valor: number) {
    this.valor = valor;
  }
  
  setUnidad1(unidad1: string) {
    this.unidad1 = unidad1;
  }
  
  /**
  * Función utilizada para realizar las conversiones de la magnitud tiempo
  * @param unidad2 de tipo string utilzada para saber a que tipo de unidad hacer la conversión
  * @returns un tipo number que indica la conversión
  */
  conversion(unidad2: string): number {
    if (this.unidad1 == "hora") {
      if (unidad2 == "hora")
        return this.valor;
      if (unidad2 == "minuto")
        return this.valor * 60;
      if (unidad2 == "segundo")
        return this.valor * 3600;
    }

    if (this.unidad1 == "minuto") {
      if (unidad2 == "hora")
        return this.valor / 60;
      if (unidad2 == "minuto")
        return this.valor;
      if (unidad2 == "segundo")
        return this.valor * 60;
    }

    if (this.unidad1 == "segundo") {
      if (unidad2 == "hora")
        return this.valor / 3600;
      if (unidad2 == "minuto")
        return this.valor / 60;
      if (unidad2 == "segundo")
        return this.valor;
    }
    
    return 0;
  }
}