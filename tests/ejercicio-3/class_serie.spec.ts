import 'chai';
import {expect} from 'chai';
import {Serie} from '../../src/ejercicio-3/class_serie';

describe.only('check Serie class', () => {
  let Daredevil = new Serie("Daredevil", "Drew Goddard", "Charlie Cox", 2015);
  it('comprobacion si Daredevil es de la clase Serie', () => {
    expect(Daredevil).to.be.an.instanceOf(Serie);
  });
});