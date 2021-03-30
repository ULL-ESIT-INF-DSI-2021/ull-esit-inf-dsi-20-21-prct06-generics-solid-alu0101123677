export interface isConvertible<T extends number, U extends string> {
  
  getValor(): number;
  getUnidad1(): string;

  setValor(valor: number);
  setUnidad1(unidad1: string);

  conversion(unidad2: string): number;
}