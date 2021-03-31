import {Streamable} from './interface_Streamable'

export abstract class BasicStreambleCollection<T> implements Streamable<T> {
  constructor (public collection: T[]){}

  abstract filterTitle();
  abstract filterActor();
  abstract filterAutor();
  abstract filterYear();

  abstract printCollection();
}