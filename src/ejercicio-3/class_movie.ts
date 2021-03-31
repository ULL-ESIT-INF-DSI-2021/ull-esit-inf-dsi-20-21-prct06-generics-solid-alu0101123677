
/**
 * clase Movie que define los atributos y métodos para definir una pelicula.
 * 
 * Se define 4 parametros, 3 tipo string que son title, director, actor y 1 atributo tipo number.
 * 
 * Se tienen 8 métodos, 4 getters y 4 setters.
 */
export class Movie {
  constructor(protected title: string, protected director: string, protected actor: string, protected year: number){}

  getTitle(): string {
    return this.title;
  }

  getDirector(): string {
    return this.director;
  }

  getActor(): string {
    return this.actor;
  }

  getYear(): number {
    return this.year;
  }

  setTitle(title: string) {
    this.title = title;
  }

  setDirector(director: string) {
    this.director = director;
  }

  setActor(actor: string) {
    this.actor = actor;
  }

  setYear(year: number) {
    this.year = year;
  }
}