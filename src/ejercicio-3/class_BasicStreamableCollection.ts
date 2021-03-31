import {Streamable} from './interface_Streamable'

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor (public collection: T[]){}

  abstract filterTitle(filtro: string): string;
  abstract filterDirector(filtro: string): string;
  abstract filterActor(filtro: string): string;
  abstract filterYear(filtro: number): number;

  abstract printCollection(): string;
  abstract printCollectionFilter(collection: T[]): string;
}