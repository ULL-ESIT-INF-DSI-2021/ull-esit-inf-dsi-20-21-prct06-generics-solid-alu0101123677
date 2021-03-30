export class Volume {
  constructor(private valor: number, private unidad1: string, private unidad2: string ){}
    
  getValor() {
    return this.valor;
  }
  
  getUnidad1() {
    return this.unidad1;
  }
  
  getUnidad2() {
    return this.unidad2;
  }
  
  setValor(valor: number) {
    this.valor = valor;
  }
  
  setUnidad1(unidad1: string) {
    this.unidad1 = unidad1;
  }
  
  setUnidad2(unidad2: string) {
    this.unidad2 = unidad2;
  }
  
  conversion() {
    
  }
}