export class Time {
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
    if (this.unidad1 == "hora") {
      if (unidad2 == "hora")
        return this.valor;
      if (unidad2 == "minuto")
        return this.valor * 60;
      if (unidad2 == "segundo")
        return this.valor * 3600;
    }

    if (this.unidad1 == "minuto") {
      if (unidad2 == "hora")
        return this.valor / 60;
      if (unidad2 == "minuto")
        return this.valor;
      if (unidad2 == "segundo")
        return this.valor * 60;
    }

    if (this.unidad1 == "segundo") {
      if (unidad2 == "hora")
        return this.valor / 3600;
      if (unidad2 == "minuto")
        return this.valor / 60;
      if (unidad2 == "segundo")
        return this.valor;
    }
    
    return 0;
  }
}