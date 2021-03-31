
export interface Streamable<T> {
  collection: T[];

  filterAutor();
  filterTitle();
  filterActor();
  filterYear();
  
  printCollection();
}