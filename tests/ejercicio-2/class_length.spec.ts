import 'chai';
import {expect} from 'chai';
import {Length} from '../../src/ejercicio-2/class_length';

describe('check Length class', () => {
  let length1 = new Length(20, "", "");
  it('comprobacion si length1 es de la clase Length', () => {
    expect(length1).to.be.an.instanceOf(Length);
  });
});