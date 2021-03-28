import 'chai';
import {expect} from 'chai';
import {Plantel} from '../../src/ejercicio-1/class_plantel';
import {DragonBall} from '../../src/ejercicio-1/subclass_dragonball';
import {DC} from '../../src/ejercicio-1/subclass_dc';

describe('check Plantel class', () => {
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, "Muere villano");
  let Goku = new DragonBall("Goku", 1.0, 2.0, 30, 40, "Kame kame ha");
  let luchadores = [Superman, Goku];
  let plantel = new Plantel(luchadores);
  it('comprobacion si plantel es de la clase Plantel', () => {
    expect(plantel).to.be.an.instanceOf(Plantel);
  });
});