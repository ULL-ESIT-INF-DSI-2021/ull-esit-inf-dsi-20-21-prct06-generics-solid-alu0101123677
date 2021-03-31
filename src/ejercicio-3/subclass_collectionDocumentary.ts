import {BasicStreamableCollection} from "./class_BasicStreamableCollection";
import {Documentary} from "./class_documentary"

/**
 * clase CollectionDocumentary que define los atributos y métodos para definir una colección de documentales.
 * Implementa la clase abstacta BasicStreamableCollection
 * 
 * Se define 1 parametros de tipo genérico, T que representa un vector de objetos de la clase Documentary.
 * 
 * Se tienen 6 métodos, filterTitle, filterDirector, filterActor, filterYear, printCollection, printCollectionFilter.
 */
export class CollectionDocumentary<T extends Documentary> extends BasicStreamableCollection<T> {
  constructor(public collection: T[]){
    super(collection);
  }
  
  /**
   * Función que filtra el vector de documentales por el titulo
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el titulo del primer documental de la colección
   */
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
  
  /**
   * Función que filtra el vector de documentales por el director
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el director del primer documental de la colección
   */
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

  /**
   * Función que filtra el vector de documentales por el actor
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el actor del primer documental de la colección
   */
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
  
  /**
   * Función que filtra el vector de documentales por el año
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el año del primer documental de la colección
   */
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
  
  /**
   * Función que imprime por pantalla en formato tabla la colección de documentales
   * @returns un string con el titulo del primer documental de la colección
   */
  printCollection(): string {
    console.table(this.collection, ["title", "director", "actor", "year"]);
    return this.collection[0].getTitle();
  }
  
  /**
   * Función que imprime por pantalla en formato tabla la colección filtrada de documentales
   * @param collection vector de objetos de la clase Documentary
   * @returns un string con el titulo del primer documental de la colección filtrada
   */
  printCollectionFilter(collection: T[]): string {
    console.table(collection, ["title", "director", "actor", "year"])
    return collection[0].getTitle();
  }
}