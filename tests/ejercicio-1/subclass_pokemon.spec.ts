import 'chai';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/superclass_fighter';
import {Pokemon} from '../../src/ejercicio-1/subclass_pokemon';

describe('check Pokemon class', () => {
  let Pikachu = new Pokemon("Pikachu", 1.0, 2.0, 30, 40, 10, "pika pika");
  it('comprobacion si Pikachu es de la clase Pokemon', () => {
    expect(Pikachu).to.be.an.instanceOf(Pokemon);
  });
  it('comprobacion de si pikachu recibe herencia de la clase Fighter', () => {
    expect(Pikachu).to.be.an.instanceOf(Fighter);
  });
});

