import {BasicStreamableCollection} from "./class_BasicStreamableCollection";
import {Documentary} from "./class_documentary"

export class CollectionDocumentary<T extends Documentary> extends BasicStreamableCollection<T> {
  constructor(public collection: T[]){
    super(collection);
  }

  filterTitle(filtro: string): string {
    let filtrado: T[] = [];
    this.collection.forEach((documentary) => {
      let title: string = documentary.getTitle();
      if (title.search(filtro) != -1) {
        filtrado.push(documentary)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getTitle();
  }

  filterDirector(filtro: string): string {
    let filtrado: T[] = [];
    this.collection.forEach((documentary) => {
      let director: string = documentary.getDirector();
      if (director.search(filtro) != -1) {
        filtrado.push(documentary)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getDirector();
  }
  
  filterActor(filtro: string): string {
    let filtrado: T[] = [];
    this.collection.forEach((documentary) => {
      let actor: string = documentary.getActor();
      if (actor.search(filtro) != -1) {
        filtrado.push(documentary)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getActor();
  }
  
  filterYear(filtro: number): number {
    let filtrado: T[] = [];
    this.collection.forEach((documentary) => {
      let year: number = documentary.getYear();
      if (filtro == year) {
        filtrado.push(documentary)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getYear();
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