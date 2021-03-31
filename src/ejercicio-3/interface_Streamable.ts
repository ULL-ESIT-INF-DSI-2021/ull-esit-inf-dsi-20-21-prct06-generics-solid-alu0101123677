/**
 * Interfaz genérica Streamble que define los atributos y funciones comunes para las 
 * distintas clases que representen colecciones de series, peliculas y documentales.
 * 
 * Se define 1 parametros de tipo genérico, T que representa un vector.
 * 
 * Se tienen 4 métodos, filterTitle, filterDirector, filterActor y filterYear.
 */
export interface Streamable<T> {
  collection: T[];
  
  filterTitle(filtro: string): string;
  filterDirector(filtro: string): string;
  filterActor(filtro: string): string;
  filterYear(filtro: number): number;
}