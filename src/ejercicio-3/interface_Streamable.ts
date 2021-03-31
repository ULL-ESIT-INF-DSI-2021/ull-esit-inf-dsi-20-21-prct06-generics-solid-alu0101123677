
export interface Streamable<T> {
  collection: T[];

  filterAutor(): string;
  filterTitle(): string;
  filterActor(): string;
  filterYear(): string;
  
  printCollection(): string;
  printCollectionFilter(collection: T[]): string;
}