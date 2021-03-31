import { BasicStreambleCollection } from "./class_BasicStreambleCollection";
import {Serie} from "./class_serie"

export class CollectionSerie<T extends Serie> extends BasicStreambleCollection<T> {
  constructor(public collection: T[]){
    super(collection);
  }

  filterTitle() {

  }
  
  filterActor() {

  }
  
  filterAutor() {

  }
  
  filterYear() {

  }

  printCollection() {
    console.table(this.collection, ["title"]);
  }
}