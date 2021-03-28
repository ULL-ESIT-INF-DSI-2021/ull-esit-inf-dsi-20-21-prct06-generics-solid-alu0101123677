import 'chai';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/superclass_fighter';
import {DC} from '../../src/ejercicio-1/subclass_dc';

describe('check DC class', () => {
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, "Muere villano");
  it('comprobacion si Superman es de la clase DC', () => {
    expect(Superman).to.be.an.instanceOf(DC);
  });
  it('comprobacion de si Superman recibe herencia de la clase Fighter', () => {
    expect(Superman).to.be.an.instanceOf(Fighter);
  });
});
