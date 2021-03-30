import {isConvertible} from './interface_isConvertible';

/**
 * Clase Temperature que sirve para realizar las conversiones de la magnitud de temperatura
 * 
 * Se define 2 atributos, valor de tipo number que representa el valor númerico
 * y unidad1 de tipo string que define la en que unidad se encuentra.
 * 
 * Se tienen 5 métodos, getValor, getUnidad1, setValor, setUnidad1 y conversion.
 * 
 * Se ha implementado para que se haga las siguientes conversiones:
 *   -grados celsius -> grados fahrenheit
 *   -grados celsius -> kelvin
 *   -grados fahrenheit -> kelvin
 *   -grados fahrenheit -> grados celsius
 *   -kelvin -> grados fahrenheit
 *   -kelvin -> grados celsius
 */
export class Temperature implements isConvertible<number, string> {
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
  * Función utilizada para realizar las conversiones de la magnitud temperatura
  * @param unidad2 de tipo string utilzada para saber a que tipo de unidad hacer la conversión
  * @returns un tipo number que indica la conversión
  */
  conversion(unidad2: string): number {
    if (this.unidad1 == "grados celsius") {
      if (unidad2 == "grados celsius")
        return this.valor;
      if (unidad2 == "grados fahrenheit")
        return (this.valor * (9 / 5)) + 32;
      if (unidad2 == "kelvin")
        return this.valor + 273.15;
    }

    if (this.unidad1 == "grados fahrenheit") {
      if (unidad2 == "grados celsius")
        return (this.valor - 32) * (5 / 9);
      if (unidad2 == "grados fahrenheit")
        return this.valor;
      if (unidad2 == "kelvin")
        return (this.valor - 32) * (5 / 9) + 273.15;
    }

    if (this.unidad1 == "kelvin") {
      if (unidad2 == "grados celsius")
        return this.valor - 273.15;
      if (unidad2 == "grados fahrenheit")
        return (this.valor - 273.15) * (9 / 5) + 32;
      if (unidad2 == "kelvin")
        return this.valor;
    }

    return 0;
  }
}