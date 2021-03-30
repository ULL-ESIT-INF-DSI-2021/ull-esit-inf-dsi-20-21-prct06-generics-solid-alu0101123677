
export class Length {
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
    if (this.unidad1 == "m" || this.unidad1 == "metro") {
      if (unidad2 == "mm" || unidad2 == "milimetro")
        return this.valor * 1000;
      if (unidad2 == "cm" || unidad2 == "centimetro")
        return this.valor * 100;
      if (unidad2 == "dm" || unidad2 == "decimetro")
        return this.valor * 10;
      if (unidad2 == "m" || unidad2 == "metro")
        return this.valor * 1;
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
        return this.valor * 1;
    }

    if (this.unidad1 == "pie") {
      if (unidad2 == "milla")
        return this.valor / 5280.0;
      if (unidad2 == "m" || unidad2 == "metro")
        return this.valor / 3.2808;
    }

    if (this.unidad1 == "milla") {
      if (unidad2 == "pie")
        return this.valor * 5280.0;
      if (unidad2 == "m" || unidad2 == "metro")
        return this.valor / 0.00062137;
    }

    return 0
  }
}