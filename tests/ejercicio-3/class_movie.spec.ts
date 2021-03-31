import 'chai';
import {expect} from 'chai';
import {Movie} from '../../src/ejercicio-3/class_movie';

describe.only('check Movie class', () => {
  let Joker = new Movie("Joker", "Todd Philips", "Joaquin Phoenix", 2019);
  it('comprobacion si Joker es de la clase Movie', () => {
    expect(Joker).to.be.an.instanceOf(Movie);
  });
});