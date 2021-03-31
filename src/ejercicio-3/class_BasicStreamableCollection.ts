import { Printeable } from './interface_Printeable';
import {Streamable} from './interface_Streamable'

/**
 * clase abstacta genérica BasicStreamableCollection que define los atributos y funciones comunes para las 
 * distintas clases que representen colleciones de series, peliculas y documentales, implementa las interfaces
 * Streamable y Printeable.
 * 
 * Se define 1 parametros de tipo genérico, T que representa un vector.
 * 
 * Se tienen 6 métodos, filterTitle, filterDirector, filterActor, filterYear, printCollection, printCollectionFilter.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>, Printeable<T> {
  constructor (public collection: T[]){}

  abstract filterTitle(filtro: string): string;
  abstract filterDirector(filtro: string): string;
  abstract filterActor(filtro: string): string;
  abstract filterYear(filtro: number): number;

  abstract printCollection(): string;
  abstract printCollectionFilter(collection: T[]): string;
}