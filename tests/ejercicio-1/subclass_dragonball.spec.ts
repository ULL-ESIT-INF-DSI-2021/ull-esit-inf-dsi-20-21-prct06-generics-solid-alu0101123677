import 'chai';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/superclass_fighter';
import {DragonBall} from '../../src/ejercicio-1/subclass_dragonball';

describe('check DragonBall class', () => {
  let Goku = new DragonBall("Goku", 1.0, 2.0, 30, 40, "Kame kame ha");
  it('comprobacion si Goku es de la clase DragonBall', () => {
    expect(Goku).to.be.an.instanceOf(DragonBall);
  });
  it('comprobacion de si Goku recibe herencia de la clase Fighter', () => {
    expect(Goku).to.be.an.instanceOf(Fighter);
  });
});