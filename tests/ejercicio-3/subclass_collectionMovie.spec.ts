import 'chai';
import {expect} from 'chai';
import {CollectionMovie} from '../../src/ejercicio-3/subclass_collectionMovie';
import {Movie} from '../../src/ejercicio-3/class_movie';

let LaLaLand = new Movie("La La Land", "Damien Chazelle", "Ryan Gosling", 2016);
let Budapest = new Movie("El Gran Hotel Budapest", "Wes Anderson", "Ralph Fiennes", 2014);
let Avatar = new Movie("Avatar", "James Cameron", "Zoe Saldaña", 2009);
let Joker = new Movie("Joker", "Todd Philips", "Joaquin Phoenix", 2019)

let collection = [LaLaLand, Budapest, Avatar, Joker];


describe('check CollectionMovie class', () => {
  let collection_movie = new CollectionMovie(collection);
  it('comprobacion si collection_movie es de la clase CollectionMovie', () => {
    expect(collection_movie).to.be.an.instanceOf(CollectionMovie);
  });
});

describe('check filterTitle function', () => {
  let collection_movie = new CollectionMovie(collection);
  it('comprobacion filterTitle con La La Land', () => {
    expect(collection_movie.filterTitle("La La Land")).to.be.eql("La La Land");
  });
  it('comprobacion filterTitle con Avatar', () => {
    expect(collection_movie.filterTitle("Avatar")).to.be.eql("Avatar");
  });
});

describe('check filterDirector function', () => {
  let collection_movie = new CollectionMovie(collection);
  it('comprobacion filterDirector con Damien Chazelle', () => {
    expect(collection_movie.filterDirector("Damien Chazelle")).to.be.eql("Damien Chazelle");
  });
  it('comprobacion filterDirector con James Cameron', () => {
    expect(collection_movie.filterDirector("James Cameron")).to.be.eql("James Cameron");
  });
});

describe('check filterActor function', () => {
  let collection_movie = new CollectionMovie(collection);
  it('comprobacion filterActor con Ryan Gosling', () => {
    expect(collection_movie.filterActor("Ryan Gosling")).to.be.eql("Ryan Gosling");
  });
  it('comprobacion filterActor con Joaquin Phoenix', () => {
    expect(collection_movie.filterActor("Joaquin Phoenix")).to.be.eql("Joaquin Phoenix");
  });
});


describe('check filterYear function', () => {
  let collection_movie = new CollectionMovie(collection);
  it('comprobacion filterYear con 2019', () => {
    expect(collection_movie.filterYear(2019)).to.be.equal(2019);
  });
  it('comprobacion filterYear con 2014', () => {
    expect(collection_movie.filterYear(2014)).to.be.equal(2014);
  });
});

describe('check printCollection function', () => {
  let collection_movie = new CollectionMovie(collection);
  it('comprobacion printCollection', () => {
    expect(collection_movie.printCollection()).to.be.eql("La La Land");
  });
});

describe('check printCollectionFilter function', () => {
  let collection_movie = new CollectionMovie(collection);
  let collection2 = [LaLaLand];
  it('comprobacion printCollectionFilter', () => {
    expect(collection_movie.printCollectionFilter(collection2)).to.be.eql("La La Land");
  });
});