import 'chai';
import {expect} from 'chai';
import {Force} from '../../src/ejercicio-2/class_force';

describe('check Force class', () => {
  let force1 = new Force(20, "", "");
  it('comprobacion si force1 es de la clase Force', () => {
    expect(force1).to.be.an.instanceOf(Force);
  });
});