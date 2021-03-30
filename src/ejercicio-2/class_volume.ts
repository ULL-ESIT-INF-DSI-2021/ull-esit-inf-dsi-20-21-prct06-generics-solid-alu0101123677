import {isConvertible} from './interface_isConvertible';

/**
 * Clase Volume que sirve para realizar las conversiones de la magnitud de volumen
 * 
 * Se define 2 atributos, valor de tipo number que representa el valor númerico
 * y unidad1 de tipo string que define la en que unidad se encuentra.
 * 
 * Se tienen 5 métodos, getValor, getUnidad1, setValor, setUnidad1 y conversion.
 * 
 * Se ha implementado para que se haga las siguientes conversiones:
 *   -metro cúbico -> decametro cúbico
 *   -metro cúbico -> decimetro cúbico
 *   -decametro cúbico -> metro cúbico
 *   -decametro cúbico -> decimetro cúbico
 *   -decimetro cúbico -> metro cúbico
 *   -decimetro cúbico -> decametro cúbico
 */
export class Volume implements isConvertible<number, string> {
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
  * Función utilizada para realizar las conversiones de la magnitud volumen
  * @param unidad2 de tipo string utilzada para saber a que tipo de unidad hacer la conversión
  * @returns un tipo number que indica la conversión
  */
  conversion(unidad2: string): number {
    if (this.unidad1 == "metro cubico") {
      if (unidad2 == "metro cubico")
        return this.valor;
      if (unidad2 == "decametro cubico")
        return this.valor / 1000;
      if (unidad2 == "decimetro cubico")
        return this.valor * 1000;
    }

    if (this.unidad1 == "decametro cubico") {
      if (unidad2 == "metro cubico")
        return this.valor * 1000;
      if (unidad2 == "decametro cubico")
        return this.valor;
      if (unidad2 == "decimetro cubico")
        return this.valor * 1000000;
    }

    if (this.unidad1 == "decimetro cubico") {
      if (unidad2 == "metro cubico")
        return this.valor / 1000;
      if (unidad2 == "decametro cubico")
        return this.valor / 1000000;
      if (unidad2 == "decimetro cubico")
        return this.valor;
    }

    return 0;
  }
}