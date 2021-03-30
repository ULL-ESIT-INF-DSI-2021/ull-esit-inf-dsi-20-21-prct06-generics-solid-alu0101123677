import 'chai';
import {expect} from 'chai';
import {Mass} from '../../src/ejercicio-2/class_mass';

describe('check Mass class', () => {
  let mass1 = new Mass(20, "kg", "g");
  it('comprobacion si mass1 es de la clase Mass', () => {
    expect(mass1).to.be.an.instanceOf(Mass);
  });
});