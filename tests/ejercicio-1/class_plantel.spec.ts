import 'chai';
import {expect} from 'chai';
import {Plantel} from '../../src/ejercicio-1/class_plantel';
import {DragonBall} from '../../src/ejercicio-1/subclass_dragonball';
import {StarWars} from '../../src/ejercicio-1/subclass_starwars';
import {Pokemon} from '../../src/ejercicio-1/subclass_pokemon';
import {Marvel} from '../../src/ejercicio-1/subclass_marvel';
import {DC} from '../../src/ejercicio-1/subclass_dc';

describe('check Plantel class', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, 10, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, 10, "Muere villano");
  let Goku = new DragonBall("Goku", 1.0, 2.0, 30, 40, 10, "Kame kame ha");
  let Pikachu = new Pokemon("Pikachu", 1.0, 2.0, 30, 40, 10, "pika pika");
  let Spiderman = new Marvel("Spiderman", 1.0, 2.0, 30, 40, 10, "Tú vecino y amigo spiderman");
  let luchadores = [Superman, Goku, DarthVader, Pikachu, Spiderman];
  let plantel = new Plantel(luchadores);
  it('comprobacion si plantel es de la clase Plantel', () => {
    expect(plantel).to.be.an.instanceOf(Plantel);
  });
});