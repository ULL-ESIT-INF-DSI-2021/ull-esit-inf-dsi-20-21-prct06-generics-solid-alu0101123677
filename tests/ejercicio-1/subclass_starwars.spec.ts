import 'chai';
import {expect} from 'chai';
import {Fighter} from '../../src/ejercicio-1/superclass_fighter';
import {StarWars} from '../../src/ejercicio-1/subclass_starwars';

describe('check StarWars class', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, 10, "Siente la fuerza");
  it('comprobacion si Darth Vader es de la clase Starwars', () => {
    expect(DarthVader).to.be.an.instanceOf(StarWars);
  });
  it('comprobacion de si Darth Vader recibe herencia de la clase Fighter', () => {
    expect(DarthVader).to.be.an.instanceOf(Fighter);
  });
});