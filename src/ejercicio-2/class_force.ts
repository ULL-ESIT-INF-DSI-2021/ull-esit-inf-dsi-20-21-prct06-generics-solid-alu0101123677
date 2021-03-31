import {isConvertible} from './interface_isConvertible';

/**
 * Clase Force que sirve para realizar las conversiones de la magnitud de fuerza
 * 
 * Se define 2 atributos, valor de tipo number que representa el valor númerico
 * y unidad1 de tipo string que define la en que unidad se encuentra.
 * 
 * Se tienen 5 métodos, getValor, getUnidad1, setValor, setUnidad1 y conversion.
 * 
 * Se ha implementado para que se haga las siguientes conversiones:
 *   -newton -> kilonewton
 *   -newton -> meganewton
 *   -newton -> kilopondio
 *   -newton -> dina
 *   -kilopondio -> newton
 *   -dina -> kilopondio
 */
export class Force implements isConvertible<number, string> {
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
   * Función utilizada para realizar las conversiones de la magnitud fuerza
   * @param unidad2 de tipo string utilzada para saber a que tipo de unidad hacer la conversión
   * @returns un tipo number que indica la conversión
   */
  conversion(unidad2: string): number {
    if (this.unidad1 == "newton") {
      if (unidad2 == "kilonewton")
        return this.valor / 1000;
      if (unidad2 == "meganewton")
        return this.valor / 1000000;
      if (unidad2 == "newton")
        return this.valor;
      if (unidad2 == "kilopondio")
        return this.valor / 9.807;
      if (unidad2 == "dina")
        return this.valor * 100000;
    }

    if (this.unidad1 == "kilopondio") {
      if (unidad2 == "kilopondio")
        return this.valor;
      if (unidad2 == "newton")
        return this.valor * 9.807;
    }

    if (this.unidad1 == "dina") {
      if (unidad2 == "dina")
        return this.valor;
      if (unidad2 == "newton")
        return this.valor / 100000;
    }

    return 0;
  }
}