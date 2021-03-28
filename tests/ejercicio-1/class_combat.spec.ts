import 'chai';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio-1/class_combat';
import {DragonBall} from '../../src/ejercicio-1/subclass_dragonball';
import {StarWars} from '../../src/ejercicio-1/subclass_starwars';
import {Pokemon} from '../../src/ejercicio-1/subclass_pokemon';
import {Marvel} from '../../src/ejercicio-1/subclass_marvel';
import {DC} from '../../src/ejercicio-1/subclass_dc';

describe.skip('check Combat class', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, 10, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, 10, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion si combat es de la clase Combat', () => {
    expect(combat).to.be.an.instanceOf(Combat);
  });
});


describe.skip('check start function', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, 10, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, 10, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion si la funcion start funciona correctamente', () => {
    expect(combat.start()).to.be.eql("Darth Vader");
  });
});

describe.skip('check priority function', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, 10, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, 20, "Muere villano");
  it('comprobacion si la funcion priority funciona correctamente, se espera un 1', () => {
    let combat = new Combat(Superman, DarthVader);
    expect(combat.priority()).to.be.equal(1);
  });
  it('comprobacion si la funcion priority funciona correctamente, se espera un 2', () => {
    let combat = new Combat(DarthVader, Superman);
    expect(combat.priority()).to.be.equal(2);
  });
});

describe.skip('check fight function', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, 10, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 30, 40, 10, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion combat.fight() es igual a 2', () => {
    expect(combat.fight()).to.be.equal(2);
  });
});



describe('check lowEfficiency, neutralEfficiency and highEfficiency  functions with attack and defense greater than 1', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 40, 50, 10, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 40, 50, 10, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion lowEfficiency', () => {
    expect(combat.lowEfficiency(DarthVader, Superman)).to.be.equal(20);
  });
  it('comprobacion neutralEfficiency', () => {
    expect(combat.neutralEfficiency(DarthVader, Superman)).to.be.equal(40);
  });
  it('comprobacion highEfficiency', () => {
    expect(combat.highEfficiency(DarthVader, Superman)).to.be.equal(80);
  });
});

describe('check lowEfficiency, neutralEfficiency and highEfficiency functions with attack equal 0', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 0, 50, 10, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 0, 50, 10, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion lowEfficiency', () => {
    expect(combat.lowEfficiency(DarthVader, Superman)).to.be.equal(0);
  });
  it('comprobacion neutralEfficiency', () => {
    expect(combat.neutralEfficiency(DarthVader, Superman)).to.be.equal(0);
  });
  it('comprobacion highEfficiency', () => {
    expect(combat.highEfficiency(DarthVader, Superman)).to.be.equal(0);
  });
});

describe('check lowEfficiency, neutralEfficiency and highEfficiency functions with defense equal 0', () => {
  let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 40, 0, 10, "Siente la fuerza");
  let Superman = new DC("Superman", 1.0, 2.0, 40, 0, 10, "Muere villano");
  let combat = new Combat(DarthVader, Superman);
  it('comprobacion lowEfficiency', () => {
    expect(combat.lowEfficiency(DarthVader, Superman)).to.be.equal(1000);
  });
  it('comprobacion neutralEfficiency', () => {
    expect(combat.neutralEfficiency(DarthVader, Superman)).to.be.equal(2000);
  });
  it('comprobacion highEfficiency', () => {
    expect(combat.highEfficiency(DarthVader, Superman)).to.be.equal(4000);
  });
});