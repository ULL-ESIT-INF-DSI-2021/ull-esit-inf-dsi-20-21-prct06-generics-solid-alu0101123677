import 'chai';
import {expect} from 'chai';
import {CollectionSerie} from '../../src/ejercicio-3/subclass_collectionSerie';
import {Serie} from '../../src/ejercicio-3/class_serie';

let Daredevil = new Serie("Daredevil", "Drew Goddard", "Charlie Cox", 2015);
let Flash = new Serie("The Flash", "Greg Berlanti", "Grant Gustin", 2014);
let GameOfThrones = new Serie("Juego de tronos", "David Benioff", "Emilia Clarke", 2011);
let Vikingos = new Serie("Vikingos", "Michel Hirst", "Travis Fimmel", 2013)

let collection = [Daredevil, Flash, GameOfThrones, Vikingos];


describe('check CollectionSerie class', () => {
  let collection_serie = new CollectionSerie(collection);
  it('comprobacion si collection_serie es de la clase CollectionSerie', () => {
    expect(collection_serie).to.be.an.instanceOf(CollectionSerie);
  });
});

describe('check filterTitle function', () => {
  let collection_serie = new CollectionSerie(collection);
  it('comprobacion filterTitle con Daredevil', () => {
    expect(collection_serie.filterTitle("Daredevil")).to.be.eql("Daredevil");
  });
  it('comprobacion filterTitle con vikingos', () => {
    expect(collection_serie.filterTitle("Vikingos")).to.be.eql("Vikingos");
  });
});

describe('check filterDirector function', () => {
  let collection_serie = new CollectionSerie(collection);
  it('comprobacion filterDirector con Greg Berlanti', () => {
    expect(collection_serie.filterDirector("Greg Berlanti")).to.be.eql("Greg Berlanti");
  });
  it('comprobacion filterDirector con David Benioff', () => {
    expect(collection_serie.filterDirector("David Benioff")).to.be.eql("David Benioff");
  });
});

describe('check filterActor function', () => {
  let collection_serie = new CollectionSerie(collection);
  it('comprobacion filterActor con Charlie Cox', () => {
    expect(collection_serie.filterActor("Charlie Cox")).to.be.eql("Charlie Cox");
  });
  it('comprobacion filterActor con Travis Fimmel', () => {
    expect(collection_serie.filterActor("Travis Fimmel")).to.be.eql("Travis Fimmel");
  });
});


describe('check filterYear function', () => {
  let collection_serie = new CollectionSerie(collection);
  it('comprobacion filterYear con 2013', () => {
    expect(collection_serie.filterYear(2013)).to.be.equal(2013);
  });
  it('comprobacion filterYear con 2014', () => {
    expect(collection_serie.filterYear(2014)).to.be.equal(2014);
  });
});

describe('check printCollection function', () => {
  let collection_serie = new CollectionSerie(collection);
  it('comprobacion printCollection', () => {
    expect(collection_serie.printCollection()).to.be.eql("Daredevil");
  });
});

describe('check printCollectionFilter function', () => {
  let collection_serie = new CollectionSerie(collection);
  let collection2 = [Daredevil];
  it('comprobacion printCollectionFilter', () => {
    expect(collection_serie.printCollectionFilter(collection2)).to.be.eql("Daredevil");
  });
});

