import {BasicStreamableCollection} from "./class_BasicStreamableCollection";
import {Movie} from "./class_movie"

export class CollectionMovie<T extends Movie> extends BasicStreamableCollection<T> {
  constructor(public collection: T[]){
    super(collection);
  }

  filterTitle(filtro: string): string {
    let filtrado: T[] = [];
    this.collection.forEach((movie) => {
      let title: string = movie.getTitle();
      if (title.search(filtro) != -1) {
        filtrado.push(movie)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getTitle();
  }

  filterDirector(filtro: string): string {
    let filtrado: T[] = [];
    this.collection.forEach((movie) => {
      let director: string = movie.getDirector();
      if (director.search(filtro) != -1) {
        filtrado.push(movie)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getDirector();
  }
  
  filterActor(filtro: string): string {
    let filtrado: T[] = [];
    this.collection.forEach((movie) => {
      let actor: string = movie.getActor();
      if (actor.search(filtro) != -1) {
        filtrado.push(movie)
      }
    });
    this.printCollectionFilter(filtrado);
    return filtrado[0].getActor();
  }
  
  filterYear(filtro: number): number {
    let filtrado: T[] = [];
    this.collection.forEach((movie) => {
      let year: number = movie.getYear();
      if (filtro == year) {
        filtrado.push(movie)
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