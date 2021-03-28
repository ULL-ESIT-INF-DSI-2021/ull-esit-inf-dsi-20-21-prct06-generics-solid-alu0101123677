import 'chai';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/class_combat';
import {DragonBall} from '../../src/ejercicio-1/subclass_dragonball';
import {StarWars} from '../../src/ejercicio-1/subclass_starwars';
import {Pokemon} from '../../src/ejercicio-1/subclass_pokemon';
import {Marvel} from '../../src/ejercicio-1/subclass_marvel';
import {DC} from '../../src/ejercicio-1/subclass_dc';
import {lowEfficiency} from '../../src/ejercicio-1/class_combat';
import {neutralEfficiency} from '../../src/ejercicio-1/class_combat';
import {highEfficiency} from '../../src/ejercicio-1/class_combat';

describe('check Combat class', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion si combat es de la clase Combat', () => {
    expect(combat).to.be.an.instanceOf(Combat);
  });
});

describe('check lowEfficiency function', () => {
  it('comprobacion lowEfficiency(40, 50) es 20', () => {
    expect(lowEfficiency(40, 50)).to.be.equal(20);
  });
  it('comprobacion lowEfficiency(0, 50) es 0', () => {
    expect(lowEfficiency(0, 50)).to.be.equal(0);
  });
  it('comprobacion lowEfficiency(40, 50) es 20', () => {
    expect(lowEfficiency(40, 0)).to.be.equal(1000);
  });
});

describe('check neutralEfficiency function', () => {
  it('comprobacion lowEfficiency(40, 50) es 40', () => {
    expect(neutralEfficiency(40, 50)).to.be.equal(40);
  });
  it('comprobacion lowEfficiency(0, 50) es 0', () => {
    expect(neutralEfficiency(0, 50)).to.be.equal(0);
  });
  it('comprobacion lowEfficiency(40, 50) es 20', () => {
    expect(neutralEfficiency(40, 0)).to.be.equal(2000);
  });
});

describe('check lowEfficiency function', () => {
  it('comprobacion highEfficiency(40, 50) es 80', () => {
    expect(highEfficiency(40, 50)).to.be.equal(80);
  });
  it('comprobacion lowEfficiency(0, 50) es 0', () => {
    expect(highEfficiency(0, 50)).to.be.equal(0);
  });
  it('comprobacion lowEfficiency(40, 50) es 20', () => {
    expect(highEfficiency(40, 0)).to.be.equal(4000);
  });
});