import 'chai';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/class_combat';
import {DragonBall} from '../../src/ejercicio-1/subclass_dragonball';
import {StarWars} from '../../src/ejercicio-1/subclass_starwars';
import {Pokemon} from '../../src/ejercicio-1/subclass_pokemon';
import {Marvel} from '../../src/ejercicio-1/subclass_marvel';
import {DC} from '../../src/ejercicio-1/subclass_dc';

describe('check Combat class', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion si combat es de la clase Combat', () => {
    expect(combat).to.be.an.instanceOf(Combat);
  });
});

/*describe('check fight function', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, "Muere villano");
  let combat1 = new Combat(DarthVader, Superman);
  it('comprobacion combat1.fight() es igual a 2', () => {
    expect(combat1.fight().to.be.equal(2);
  });
});*/



describe('check lowEfficiency, neutralEfficiency and highEfficiency  functions with attack and defense greater than 1', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 40, 50, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 40, 50, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion lowEfficiency', () => {
    expect(combat.lowEfficiency()).to.be.equal(20);
  });
  it('comprobacion neutralEfficiency', () => {
    expect(combat.neutralEfficiency()).to.be.equal(40);
  });
  it('comprobacion highEfficiency', () => {
    expect(combat.highEfficiency()).to.be.equal(80);
  });
});

describe('check lowEfficiency, neutralEfficiency and highEfficiency functions with attack equal 0', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 0, 50, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 0, 50, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion lowEfficiency', () => {
    expect(combat.lowEfficiency()).to.be.equal(0);
  });
  it('comprobacion neutralEfficiency', () => {
    expect(combat.neutralEfficiency()).to.be.equal(0);
  });
  it('comprobacion highEfficiency', () => {
    expect(combat.highEfficiency()).to.be.equal(0);
  });
});

describe('check lowEfficiency, neutralEfficiency and highEfficiency functions with defense equal 0', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 40, 0, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 40, 0, "Muere villano");
  let combat1 = new Combat(DarthVader, Superman);
  it('comprobacion lowEfficiency', () => {
    expect(combat1.lowEfficiency()).to.be.equal(1000);
  });
  it('comprobacion neutralEfficiency', () => {
    expect(combat1.neutralEfficiency()).to.be.equal(2000);
  });
  it('comprobacion highEfficiency', () => {
    expect(combat1.highEfficiency()).to.be.equal(4000);
  });
});