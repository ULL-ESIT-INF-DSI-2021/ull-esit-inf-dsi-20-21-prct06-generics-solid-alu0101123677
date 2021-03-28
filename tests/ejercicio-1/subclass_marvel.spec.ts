import 'chai';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/superclass_fighter';
import {Marvel} from '../../src/ejercicio-1/subclass_marvel';

describe('check Marvel class', () => {
  let Spiderman = new Marvel("Spiderman", 1.0, 2.0, 30, 40, "Tú vecino y amigo spiderman");
  it('comprobacion si Spiderman es de la clase Marvel', () => {
    expect(Spiderman).to.be.an.instanceOf(Marvel);
  });
  it('comprobacion de si Spiderman recibe herencia de la clase Fighter', () => {
    expect(Spiderman).to.be.an.instanceOf(Fighter);
  });
});