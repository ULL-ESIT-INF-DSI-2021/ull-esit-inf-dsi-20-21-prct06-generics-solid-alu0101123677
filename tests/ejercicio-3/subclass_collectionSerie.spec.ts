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