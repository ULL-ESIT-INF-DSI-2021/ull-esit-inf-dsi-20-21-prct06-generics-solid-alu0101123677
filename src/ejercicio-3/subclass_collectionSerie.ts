import {BasicStreamableCollection} from "./class_BasicStreamableCollection";
import {Serie} from "./class_serie"

/**
 * clase CollectionSerie que define los atributos y métodos para definir una colección de series.
 * Implementa la clase abstacta BasicStreamableCollection
 * 
 * Se define 1 parametros de tipo genérico, T que representa un vector de objetos de la clase Serie.
 * 
 * Se tienen 6 métodos, filterTitle, filterDirector, filterActor, filterYear, printCollection, printCollectionFilter.
 */
export class CollectionSerie<T extends Serie> extends BasicStreamableCollection<T> {
  constructor(public collection: T[]){
    super(collection);
  }

  /**
   * Función que filtra el vector de series por el titulo
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el titulo de la primera serie de la colección
   */
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

  /**
   * Función que filtra el vector de series por el director
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el director de la primera serie de la colección
   */
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
  
  /**
   * Función que filtra el vector de series por el actor
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el actor de la primera serie de la colección
   */
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
  
  /**
   * Función que filtra el vector de series por el año
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el año de la primer serie de la colección
   */
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

  /**
   * Función que imprime por pantalla en formato tabla la colección de series
   * @returns un string con el titulo de la primera serie de la colección
   */
  printCollection(): string {
    console.table(this.collection, ["title", "director", "actor", "year"]);
    return this.collection[0].getTitle();
  }
 
  /**
   * Función que imprime por pantalla en formato tabla la colección filtrada de series
   * @param collection vector de objetos de la clase Serie
   * @returns un string con el titulo de la primera serie de la colección filtrada
   */
  printCollectionFilter(collection: T[]): string {
    console.table(collection, ["title", "director", "actor", "year"])
    return collection[0].getTitle();
  }
}