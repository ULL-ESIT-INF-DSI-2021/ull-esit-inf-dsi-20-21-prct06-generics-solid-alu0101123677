import {BasicStreamableCollection} from "./class_BasicStreamableCollection";
import {Serie} from "./class_serie"

export class CollectionSerie<T extends Serie> extends BasicStreamableCollection<T> {
  constructor(public collection: T[]){
    super(collection);
  }

  filterTitle(filtro: string): string {
    let filtrado: T[] = [];
    this.collection.forEach((serie) => {
      let title: string = serie.getTitle();
      if (title.search(filtro) != -1) {
        filtrado.push(serie)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getTitle();
  }

  filterDirector(filtro: string): string {
    let filtrado: T[] = [];
    this.collection.forEach((serie) => {
      let director: string = serie.getDirector();
      if (director.search(filtro) != -1) {
        filtrado.push(serie)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getDirector();
  }
  
  filterActor(filtro: string): string {
    let filtrado: T[] = [];
    this.collection.forEach((serie) => {
      let actor: string = serie.getActor();
      if (actor.search(filtro) != -1) {
        filtrado.push(serie)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getActor();
  }
  
  filterYear(filtro: number): number {
    let filtrado: T[] = [];
    this.collection.forEach((serie) => {
      let year: number = serie.getYear();
      if (filtro == year) {
        filtrado.push(serie)
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