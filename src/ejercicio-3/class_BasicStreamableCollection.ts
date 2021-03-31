import {Streamable} from './interface_Streamable'

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor (public collection: T[]){}

  abstract filterTitle(): string;
  abstract filterActor(): string;
  abstract filterAutor(): string;
  abstract filterYear(): string;

  abstract printCollection(): string;
  abstract printCollectionFilter(collection: T[]): string;
}