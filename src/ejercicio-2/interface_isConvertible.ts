/**
 * Interfaz genérica isConvertible que define los atributos y funciones comunes para las 
 * distintas clases que representen unidades de médidas.
 * 
 * Se define 2 parametros de tipo genérico, T y U restringidos a los tipo number y string 
 * respectivamente para representar el valor númerico y el tipo de unidad
 * 
 * Se tienen 5 métodos, 2 métodos getter y 2 métodos setter y el método conversion para realizar
 * las conversiones entre sistemas y unidades.
 */
export interface isConvertible<T extends number, U extends string> {
  
  getValor(): number;
  getUnidad1(): string;

  setValor(valor: number);
  setUnidad1(unidad1: string);

  conversion(unidad2: string): number;
}