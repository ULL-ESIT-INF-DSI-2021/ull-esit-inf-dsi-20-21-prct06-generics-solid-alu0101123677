import {isConvertible} from './interface_isConvertible';

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