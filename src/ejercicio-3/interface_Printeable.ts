/**
 * Interfaz genérica Streamble que define los atributos y funciones comunes para las 
 * distintas clases que representen colecciones de series, peliculas y documentales.
 * 
 * Se define 1 parametros de tipo genérico, T que representa un vector.
 * 
 * Se tienen 2 métodos printCollection y printCollectionFilter.
 */
export interface Printeable<T> {
  collection: T[];

  printCollection(): string;
  printCollectionFilter(collection: T[]): string;
}