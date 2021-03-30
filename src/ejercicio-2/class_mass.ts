import {isConvertible} from './interface_isConvertible';

/**
 * Clase Mass que sirve para realizar las conversiones de la magnitud de masa
 * 
 * Se define 2 atributos, valor de tipo number que representa el valor númerico
 * y unidad1 de tipo string que define la en que unidad se encuentra.
 * 
 * Se tienen 5 métodos, getValor, getUnidad1, setValor, setUnidad1 y conversion.
 * 
 * Se ha implementado para que se haga las siguientes conversiones:
 *   -gramo -> miligramo
 *   -gramo -> centigramo
 *   -gramo -> decigramo
 *   -gramo -> decagramo
 *   -gramo -> hectogramo
 *   -gramo -> kilogramo
 *   -gramo -> onza
 *   -gramo -> libra
 *   -kilogramo -> miligramo
 *   -kilogramo -> centigramo
 *   -kilogramo -> decigramo
 *   -kilogramo -> decagramo
 *   -kilogramo -> hectogramo
 *   -kilogramo -> gramo
 *   -libra -> onza
 *   -libra -> gramo
 *   -onza -> libra
 *   -onza -> gramo
 */
export class Mass implements isConvertible<number, string> {
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
  * Función utilizada para realizar las conversiones de la magnitud masa
  * @param unidad2 de tipo string utilzada para saber a que tipo de unidad hacer la conversión
  * @returns un tipo number que indica la conversión
  */
  conversion(unidad2: string): number {
    if (this.unidad1 == "g" || this.unidad1 == "gramo") {
      if (unidad2 == "mg" || unidad2 == "miligramo")
        return this.valor * 1000;
      if (unidad2 == "cg" || unidad2 == "centigramo")
        return this.valor * 100;
      if (unidad2 == "dg" || unidad2 == "decigramo")
        return this.valor * 10;
      if (unidad2 == "g" || unidad2 == "gramo")
        return this.valor;
      if (unidad2 == "dag" || unidad2 == "decagramo")
        return this.valor / 10;
      if (unidad2 == "hg" || unidad2 == "hectogramo")
        return this.valor / 100;
      if (unidad2 == "kg" || unidad2 == "kilogramo")
        return this.valor / 1000;
      if (unidad2 == "onza")
        return this.valor * 0.035274;
      if (unidad2 == "libra")
        return this.valor * 0.0022046;
    }

    if (this.unidad1 == "kg" || this.unidad1 == "kilogramo") {
      if (unidad2 == "mg" || unidad2 == "miligramo")
        return this.valor * 1000000;
      if (unidad2 == "cg" || unidad2 == "centigramo")
        return this.valor * 100000;
      if (unidad2 == "dg" || unidad2 == "decigramo")
        return this.valor * 10000;
      if (unidad2 == "g" || unidad2 == "gramo")
        return this.valor * 1000;
      if (unidad2 == "dag" || unidad2 == "decagramo")
        return this.valor * 100;
      if (unidad2 == "hg" || unidad2 == "hectogramo")
        return this.valor * 10;
      if (unidad2 == "kg" || unidad2 == "kilogramo")
        return this.valor;
    }

    if (this.unidad1 == "libra") {
      if (unidad2 == "onza")
        return this.valor * 16;
      if (unidad2 == "g" || unidad2 == "gramo")
        return this.valor / 0.0022046;
      if (unidad2 == "libra")
        return this.valor;
    }

    if (this.unidad1 == "onza") {
      if (unidad2 == "libra")
        return this.valor / 16;
      if (unidad2 == "g" || unidad2 == "gramo")
        return this.valor / 0.035274;
      if (unidad2 == "onza")
        return this.valor;
    }

    return 0
  }
}