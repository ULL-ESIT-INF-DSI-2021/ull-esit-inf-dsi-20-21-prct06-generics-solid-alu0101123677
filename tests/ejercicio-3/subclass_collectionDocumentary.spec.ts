import 'chai';
import {expect} from 'chai';
import {CollectionDocumentary} from '../../src/ejercicio-3/subclass_collectionDocumentary';
import {Documentary} from '../../src/ejercicio-3/class_documentary';

let Cosmos = new Documentary("Cosmos: Una odisea de tiempo y espacio", "Ann Druyan", "Neil deGrasse Tyson", 2015);
let NuestroPlaneta = new Documentary("Nuestro planeta", "Alastair Fothergill", "David Attenborough", 2010);
let Terra = new Documentary("Terra", "Michael Pitiot", "Vanessa Paradis", 2015);
let Oceanos = new Documentary("Oceanos", "Jacques Perrin", "Pierce Brosnan", 2010)

let collection = [Cosmos, NuestroPlaneta, Terra, Oceanos];


describe('check CollectionDocumentary class', () => {
  let collection_documentary = new CollectionDocumentary(collection);
  it('comprobacion si collection_documentary es de la clase CollectionDocumentary', () => {
    expect(collection_documentary).to.be.an.instanceOf(CollectionDocumentary);
  });
});

describe('check filterTitle function', () => {
  let collection_documentary = new CollectionDocumentary(collection);
  it('comprobacion filterTitle con Cosmos: Una odisea de tiempo y espacio', () => {
    expect(collection_documentary.filterTitle("Cosmos: Una odisea de tiempo y espacio")).to.be.eql("Cosmos: Una odisea de tiempo y espacio");
  });
  it('comprobacion filterTitle con Oceanos', () => {
    expect(collection_documentary.filterTitle("Oceanos")).to.be.eql("Oceanos");
  });
});

describe('check filterDirector function', () => {
  let collection_documentary = new CollectionDocumentary(collection);
  it('comprobacion filterDirector con Ann Druyan', () => {
    expect(collection_documentary.filterDirector("Ann Druyan")).to.be.eql("Ann Druyan");
  });
  it('comprobacion filterDirector con Alastair Fothergill', () => {
    expect(collection_documentary.filterDirector("Alastair Fothergill")).to.be.eql("Alastair Fothergill");
  });
});

describe('check filterActor function', () => {
  let collection_documentary = new CollectionDocumentary(collection);
  it('comprobacion filterActor con Neil deGrasse Tyson', () => {
    expect(collection_documentary.filterActor("Neil deGrasse Tyson")).to.be.eql("Neil deGrasse Tyson");
  });
  it('comprobacion filterActor con Pierce Brosnan', () => {
    expect(collection_documentary.filterActor("Pierce Brosnan")).to.be.eql("Pierce Brosnan");
  });
});


describe('check filterYear function', () => {
  let collection_documentary = new CollectionDocumentary(collection);
  it('comprobacion filterYear con 2010', () => {
    expect(collection_documentary.filterYear(2010)).to.be.equal(2010);
  });
  it('comprobacion filterYear con 2015', () => {
    expect(collection_documentary.filterYear(2015)).to.be.equal(2015);
  });
});

describe('check printCollection function', () => {
  let collection_documentary = new CollectionDocumentary(collection);
  it('comprobacion printCollection', () => {
    expect(collection_documentary.printCollection()).to.be.eql("Cosmos: Una odisea de tiempo y espacio");
  });
});

describe('check printCollectionFilter function', () => {
  let collection_documentary = new CollectionDocumentary(collection);
  let collection2 = [Cosmos];
  it('comprobacion printCollectionFilter', () => {
    expect(collection_documentary.printCollectionFilter(collection2)).to.be.eql("Cosmos: Una odisea de tiempo y espacio");
  });
});