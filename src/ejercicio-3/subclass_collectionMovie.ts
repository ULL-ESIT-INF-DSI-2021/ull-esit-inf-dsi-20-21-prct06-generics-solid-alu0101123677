import {BasicStreamableCollection} from "./class_BasicStreamableCollection";
import {Movie} from "./class_movie"

/**
 * clase CollectionMovie que define los atributos y métodos para definir una colección de peliculas.
 * Implementa la clase abstacta BasicStreamableCollection
 * 
 * Se define 1 parametros de tipo genérico, T que representa un vector de objetos de la clase Movie.
 * 
 * Se tienen 6 métodos, filterTitle, filterDirector, filterActor, filterYear, printCollection, printCollectionFilter.
 */
export class CollectionMovie<T extends Movie> extends BasicStreamableCollection<T> {
  constructor(public collection: T[]){
    super(collection);
  }
 
  /**
   * Función que filtra el vector de peliculas por el titulo
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el titulo de la primera pelicula de la colección
   */
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
  
  /**
   * Función que filtra el vector de peliculas por el director
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el director de la primera pelicula de la colección
   */
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

  /**
   * Función que filtra el vector de peliculas por el actor
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el actor de la primera pelicula de la colección
   */
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
  
  /**
   * Función que filtra el vector de peliculas por el año
   * @param filtro string con la clave para realizar el filtro
   * @returns un string con el año de la primer pelicula de la colección
   */
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
 
  /**
   * Función que imprime por pantalla en formato tabla la colección de peliculas
   * @returns un string con el titulo de la primera pelicula de la colección
   */
  printCollection(): string {
    console.table(this.collection, ["title", "director", "actor", "year"]);
    return this.collection[0].getTitle();
  }
 
  /**
   * Función que imprime por pantalla en formato tabla la colección filtrada de peliculas
   * @param collection vector de objetos de la clase Movie
   * @returns un string con el titulo de la primera pelicula de la colección filtrada
   */
  printCollectionFilter(collection: T[]): string {
    console.table(collection, ["title", "director", "actor", "year"])
    return collection[0].getTitle();
  }
}