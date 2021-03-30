import 'chai';
import {expect} from 'chai';
import {Time} from '../../src/ejercicio-2/class_time';

describe('check Time class', () => {
  let time1 = new Time(20, "", "");
  it('comprobacion si time1 es de la clase Time', () => {
    expect(time1).to.be.an.instanceOf(Time);
  });
});