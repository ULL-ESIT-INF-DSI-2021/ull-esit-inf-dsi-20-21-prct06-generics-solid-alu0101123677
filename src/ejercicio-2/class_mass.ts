
export class Mass {
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
    if (this.unidad1 == "g" || this.unidad1 == "gramo") {
      if (unidad2 == "mg" || unidad2 == "miligramo")
        return this.valor * 1000
      if (unidad2 == "cg" || unidad2 == "centigramo")
        return this.valor * 100
      if (unidad2 == "dg" || unidad2 == "decigramo")
        return this.valor * 10
      if (unidad2 == "g" || unidad2 == "gramo")
        return this.valor * 1
      if (unidad2 == "dag" || unidad2 == "decagramo")
        return this.valor / 10
      if (unidad2 == "hg" || unidad2 == "hectogramo")
        return this.valor / 100
      if (unidad2 == "kg" || unidad2 == "kilogramo")
        return this.valor / 1000
      if (unidad2 == "onza")
        return this.valor * 0.035274
      if (unidad2 == "libra")
        return this.valor * 0.0022046
    }

    if (this.unidad1 == "kg" || this.unidad1 == "kilogramo") {
      if (unidad2 == "mg" || unidad2 == "miligramo")
        return this.valor * 1000000
      if (unidad2 == "cg" || unidad2 == "centigramo")
        return this.valor * 100000
      if (unidad2 == "dg" || unidad2 == "decigramo")
        return this.valor * 10000
      if (unidad2 == "g" || unidad2 == "gramo")
        return this.valor * 1000
      if (unidad2 == "dag" || unidad2 == "decagramo")
        return this.valor * 100
      if (unidad2 == "hg" || unidad2 == "hectogramo")
        return this.valor * 10
      if (unidad2 == "kg" || unidad2 == "kilogramo")
        return this.valor * 1
    }

    if (this.unidad1 == "libra") {
      if (unidad2 == "onza")
        return this.valor * 16
      if (unidad2 == "g" || unidad2 == "gramo")
        return this.valor / 0.0022046;
    }

    if (this.unidad1 == "onza") {
      if (unidad2 == "libra")
        return this.valor / 16
      if (unidad2 == "g" || unidad2 == "gramo")
        return this.valor / 0.035274
    }

    return 0
  }
}