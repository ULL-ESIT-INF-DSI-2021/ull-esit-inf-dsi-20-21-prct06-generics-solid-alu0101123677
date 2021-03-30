export class Speed {
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
      if (this.unidad1 == "kilometro por hora") {
        if (unidad2 == "kilometro por hora")
          return this.valor;
        if (unidad2 == "milla por hora")
          return this.valor / 1.609;
        if (unidad2 == "metro por segundo")
          return this.valor / 3.6;
      }
  
      if (this.unidad1 == "milla por hora") {
        if (unidad2 == "kilometro por hora")
          return this.valor * 1.609;
        if (unidad2 == "milla por hora")
          return this.valor;
      }
  
      if (this.unidad1 == "metro por segundo") {
        if (unidad2 == "kilometro por hora")
          return this.valor * 3.6;
        if (unidad2 == "metro por segundo")
          return this.valor;
      }
      return 0;
    }
  }