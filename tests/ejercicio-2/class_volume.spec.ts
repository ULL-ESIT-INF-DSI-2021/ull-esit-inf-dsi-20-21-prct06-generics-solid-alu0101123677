import 'chai';
import {expect} from 'chai';
import {Volume} from '../../src/ejercicio-2/class_volume';

describe('check Volume class', () => {
  let volume1 = new Volume(20, "", "");
  it('comprobacion si volume1 es de la clase Volume', () => {
    expect(volume1).to.be.an.instanceOf(Volume);
  });
});