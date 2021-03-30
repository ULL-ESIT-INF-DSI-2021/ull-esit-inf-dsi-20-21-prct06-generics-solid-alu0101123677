import 'chai';
import {expect} from 'chai';
import {Force} from '../../src/ejercicio-2/class_force';

describe('check Force class', () => {
  let force = new Force(20, "newton");
  it('comprobacion si force es de la clase Force', () => {
    expect(force).to.be.an.instanceOf(Force);
  });
});

describe('check conversion function', () => {
  let force = new Force(20, "newton");
  let force1 = new Force(20, "kilopondio");
  let force2 = new Force(20, "libra");
  let force3 = new Force(20, "dina");
  it('comprobacion newton a newton', () => {
    expect(force.conversion("newton")).to.be.equal(20);
  });
  it('comprobacion gramo a miligramo', () => {
    expect(force.conversion("miligramo")).to.be.equal(20000);
  });
  it('comprobacion gramo a centigramo', () => {
    expect(force.conversion("cg")).to.be.equal(2000);
  });
  it('comprobacion gramo a centigramo', () => {
    expect(force.conversion("cg")).to.be.equal(2000);
  });
  it('comprobacion gramo a centigramo', () => {
    expect(force.conversion("cg")).to.be.equal(2000);
  });
  it('comprobacion gramo a centigramo', () => {
    expect(force.conversion("cg")).to.be.equal(2000);
  });
  it('comprobacion kilogramo a kilogramo', () => {
    expect(force1.conversion("kg")).to.be.equal(20);
  });
  it('comprobacion kilogramo a hectogramo', () => {
    expect(force1.conversion("hectogramo")).to.be.equal(200);
  });
  it('comprobacion libra a onza', () => {
    expect(force2.conversion("onza")).to.be.equal(320);
  });
  it('comprobacion libra a gramo', () => {
    expect(force2.conversion("gramo")).to.be.equal(9071.940488070397);
  });
  it('comprobacion onza a libra', () => {
    expect(force3.conversion("libra")).to.be.equal(1.25);
  });
  it('comprobacion onza a gramo', () => {
    expect(force3.conversion("gramo")).to.be.equal(566.9898508816692);
  });
});