import { BasicStreamableCollection } from "./class_BasicStreamableCollection";
import {Serie} from "./class_serie"

export class CollectionSerie<T extends Serie> extends BasicStreamableCollection<T> {
  constructor(public collection: T[]){
    super(collection);
  }

  filterTitle(): string {
  return
  }
  
  filterActor(): string {
  return
  }
  
  filterAutor(): string {
  return
  }
  
  filterYear(): string {
  return
  }

  printCollection(): string {
    console.table(this.collection, ["title", "director", "actor", "year"]);
    return this.collection[0].getTitle();
  }

  printCollectionFilter(collection: T[]): string {
    console.table(collection, ["title", "director", "actor", "year"])
    return collection[0].getTitle();
  }
}