import 'chai';
import {expect} from 'chai';
import {Temperature} from '../../src/ejercicio-2/class_temperature';

describe('check Temperature class', () => {
  let temperature1 = new Temperature(20, "", "");
  it('comprobacion si temperature1 es de la clase Temperature', () => {
    expect(temperature1).to.be.an.instanceOf(Temperature);
  });
});