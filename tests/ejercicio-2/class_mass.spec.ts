import 'chai';
import {expect} from 'chai';
import {Mass} from '../../src/ejercicio-2/class_mass';

describe('check Mass class', () => {
  let mass = new Mass(20, "kg");
  it('comprobacion si mass1 es de la clase Mass', () => {
    expect(mass).to.be.an.instanceOf(Mass);
  });
});

describe.only('check conversion function', () => {
  let mass = new Mass(20, "g");
  let mass1 = new Mass(20, "kilogramo");
  let mass2 = new Mass(20, "libra")
  let mass3 = new Mass(20, "onza" )
  it('comprobacion gramo a gramo', () => {
    expect(mass.conversion("gramo")).to.be.equal(20);
  });
  it('comprobacion gramo a miligramo', () => {
    expect(mass.conversion("miligramo")).to.be.equal(20000);
  });
  it('comprobacion gramo a centigramo', () => {
    expect(mass.conversion("cg")).to.be.equal(2000);
  });
  it('comprobacion gramo a decagramo', () => {
    expect(mass.conversion("dag")).to.be.equal(2);
  });
  it('comprobacion gramo a hectogramo', () => {
    expect(mass.conversion("hectogramo")).to.be.equal(0.2);
  });
  it('comprobacion gramo a kilogramo', () => {
    expect(mass.conversion("kg")).to.be.equal(0.02);
  });
  it('comprobacion gramo a onza', () => {
    expect(mass.conversion("onza")).to.be.equal(0.70548);
  });
  it('comprobacion gramo a libra', () => {
    expect(mass.conversion("libra")).to.be.equal(0.044092000000000006);
  });
  it('comprobacion kilogramo a kilogramo', () => {
    expect(mass1.conversion("kg")).to.be.equal(20);
  });
  it('comprobacion kilogramo a hectogramo', () => {
    expect(mass1.conversion("hectogramo")).to.be.equal(200);
  });
  it('comprobacion kilogramo a decagramo', () => {
    expect(mass1.conversion("decagramo")).to.be.equal(2000);
  });
  it('comprobacion kilogramo a gramo', () => {
    expect(mass1.conversion("gramo")).to.be.equal(20000);
  });
  it('comprobacion kilogramo a decigramo', () => {
    expect(mass1.conversion("decigramo")).to.be.equal(200000);
  });
  it('comprobacion kilogramo a centigramo', () => {
    expect(mass1.conversion("centigramo")).to.be.equal(2000000);
  });
  it('comprobacion kilogramo a miligramo', () => {
    expect(mass1.conversion("miligramo")).to.be.equal(20000000);
  });
  it('comprobacion libra a onza', () => {
    expect(mass2.conversion("onza")).to.be.equal(320);
  });
  it('comprobacion libra a gramo', () => {
    expect(mass2.conversion("gramo")).to.be.equal(9071.940488070397);
  });
  it('comprobacion onza a libra', () => {
    expect(mass3.conversion("libra")).to.be.equal(1.25);
  });
  it('comprobacion onza a gramo', () => {
    expect(mass3.conversion("gramo")).to.be.equal(566.9898508816692);
  });
});