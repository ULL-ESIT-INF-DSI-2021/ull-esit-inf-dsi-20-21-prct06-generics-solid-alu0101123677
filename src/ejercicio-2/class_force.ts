import {isConvertible} from './interface_isConvertible';

export class Force implements isConvertible<number, string> {
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