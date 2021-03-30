import 'chai';
import {expect} from 'chai';
import {Speed} from '../../src/ejercicio-2/class_speed';

describe('check Speed class', () => {
  let speed1 = new Speed(20, "", "");
  it('comprobacion si speed1 es de la clase Speed', () => {
    expect(speed1).to.be.an.instanceOf(Speed);
  });
});