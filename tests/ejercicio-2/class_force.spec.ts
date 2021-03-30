import 'chai';
import {expect} from 'chai';
import {Force} from '../../src/ejercicio-2/class_force';

describe('check Force class', () => {
  let force = new Force(20, "newton");
  it('comprobacion si force es de la clase Force', () => {
    expect(force).to.be.an.instanceOf(Force);
  });
});

describe.only('check conversion function', () => {
  let force = new Force(1, "newton");
  let force1 = new Force(1, "kilopondio");
  let force2 = new Force(1, "dina");
  it('comprobacion newton a newton', () => {
    expect(force.conversion("newton")).to.be.equal(1);
  });
  it('comprobacion newton a kilonewton', () => {
    expect(force.conversion("kilonewton")).to.be.equal(0.001);
  });
  it('comprobacion newton a meganewton', () => {
    expect(force.conversion("meganewton")).to.be.equal(0.000001);
  });
  it('comprobacion newton a kilopondio', () => {
    expect(force.conversion("kilopondio")).to.be.equal(0.10196798205363515);
  });
  it('comprobacion newton a dina', () => {
    expect(force.conversion("dina")).to.be.equal(100000);
  });
  it('comprobacion kilopondio a kilopondio', () => {
    expect(force1.conversion("kilopondio")).to.be.equal(1);
  });
  it('comprobacion kilopondio a newton', () => {
    expect(force1.conversion("newton")).to.be.equal(9.807);
  });
  it('comprobacion dina a dina', () => {
    expect(force2.conversion("dina")).to.be.equal(1);
  });
  it('comprobacion dina a newton', () => {
    expect(force2.conversion("newton")).to.be.equal(0.00001);
  });
});