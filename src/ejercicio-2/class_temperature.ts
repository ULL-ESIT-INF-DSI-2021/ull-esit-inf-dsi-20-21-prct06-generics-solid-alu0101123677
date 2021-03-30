import {isConvertible} from './interface_isConvertible';

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