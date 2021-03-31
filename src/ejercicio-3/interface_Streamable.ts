
export interface Streamable<T> {
  collection: T[];
  
  filterTitle(filtro: string): string;
  filterDirector(filtro: string): string;
  filterActor(filtro: string): string;
  filterYear(filtro: number): number;
  
  printCollection(): string;
  printCollectionFilter(collection: T[]): string;
}