import {isConvertible} from './interface_isConvertible';

/**
 * Clase Length que sirve para realizar las conversiones de la magnitud de longitud
 * 
 * Se define 2 atributos, valor de tipo number que representa el valor númerico
 * y unidad1 de tipo string que define la en que unidad se encuentra.
 * 
 * Se tienen 5 métodos, getValor, getUnidad1, setValor, setUnidad1 y conversion.
 * 
 * Se ha implementado para que se haga las siguientes conversiones:
 *   -metro -> milimetro
 *   -metro -> centimetro
 *   -metro -> decimetro
 *   -metro -> decametro
 *   -metro -> hectometro
 *   -metro -> kilometro
 *   -metro -> pie
 *   -metro -> milla
 *   -kilometro -> milimetro
 *   -kilometro -> centimetro
 *   -kilometro -> decimetro
 *   -kilometro -> decametro
 *   -kilometro -> hectometro
 *   -kilometro -> metro
 *   -pie -> metro
 *   -pie -> milla
 *   -milla -> metro
 *   -milla -> pie
 */
export class Length implements isConvertible<number, string> {
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
  * Función utilizada para realizar las conversiones de la magnitud longitud
  * @param unidad2 de tipo string utilzada para saber a que tipo de unidad hacer la conversión
  * @returns un tipo number que indica la conversión
  */
  conversion(unidad2: string): number {
    if (this.unidad1 == "m" || this.unidad1 == "metro") {
      if (unidad2 == "mm" || unidad2 == "milimetro")
        return this.valor * 1000;
      if (unidad2 == "cm" || unidad2 == "centimetro")
        return this.valor * 100;
      if (unidad2 == "dm" || unidad2 == "decimetro")
        return this.valor * 10;
      if (unidad2 == "m" || unidad2 == "metro")
        return this.valor;
      if (unidad2 == "dam" || unidad2 == "decametro")
        return this.valor / 10;
      if (unidad2 == "hm" || unidad2 == "hectometro")
        return this.valor / 100;
      if (unidad2 == "km" || unidad2 == "kilometro")
        return this.valor / 1000;
      if (unidad2 == "pie")
        return this.valor * 3.2808;
      if (unidad2 == "milla")
        return this.valor * 0.00062137;
    }

    if (this.unidad1 == "km" || this.unidad1 == "kilometro") {
      if (unidad2 == "mm" || unidad2 == "milimetro")
        return this.valor * 1000000;
      if (unidad2 == "cm" || unidad2 == "centimetro")
        return this.valor * 100000;
      if (unidad2 == "dm" || unidad2 == "decimetro")
        return this.valor * 10000;
      if (unidad2 == "m" || unidad2 == "metro")
        return this.valor * 1000;
      if (unidad2 == "dam" || unidad2 == "decametro")
        return this.valor * 100;
      if (unidad2 == "hm" || unidad2 == "hectometro")
        return this.valor * 10;
      if (unidad2 == "km" || unidad2 == "kilometro")
        return this.valor;
    }

    if (this.unidad1 == "pie") {
      if (unidad2 == "milla")
        return this.valor / 5280.0;
      if (unidad2 == "m" || unidad2 == "metro")
        return this.valor / 3.2808;
      if (unidad2 == "pie")
        return this.valor;
    }

    if (this.unidad1 == "milla") {
      if (unidad2 == "pie")
        return this.valor * 5280.0;
      if (unidad2 == "m" || unidad2 == "metro")
        return this.valor / 0.00062137;
      if (unidad2 == "milla")
        return this.valor;
    }

    return 0
  }
}