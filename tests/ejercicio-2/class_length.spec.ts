import 'chai';
import {expect} from 'chai';
import {Length} from '../../src/ejercicio-2/class_length';

describe('check Length class', () => {
  let length = new Length(20, "metro");
  it('comprobacion si length es de la clase Length', () => {
    expect(length).to.be.an.instanceOf(Length);
  });
});

describe('check conversion function', () => {
  let length = new Length(20, "metro");
  let length1 = new Length(20, "kilometro");
  let length2 = new Length(20, "pie");
  let length3 = new Length(20, "milla");
  it('comprobacion metro a metro', () => {
    expect(length.conversion("metro")).to.be.equal(20);
  });
  it('comprobacion metro a milimetro', () => {
    expect(length.conversion("milimetro")).to.be.equal(20000);
  });
  it('comprobacion metro a centimetro', () => {
    expect(length.conversion("cm")).to.be.equal(2000);
  });
  it('comprobacion metro a decimetro', () => {
    expect(length.conversion("dm")).to.be.equal(200);
  });
  it('comprobacion metro a decametro', () => {
    expect(length.conversion("dam")).to.be.equal(2);
  });
  it('comprobacion metro a hectometro', () => {
    expect(length.conversion("hectometro")).to.be.equal(0.2);
  });
  it('comprobacion metro a kilometro', () => {
    expect(length.conversion("km")).to.be.equal(0.02);
  });
  it('comprobacion metro a pie', () => {
    expect(length.conversion("pie")).to.be.equal(65.616);
  });
  it('comprobacion metro a milla', () => {
    expect(length.conversion("milla")).to.be.equal(0.0124274);
  });
  it('comprobacion kilometro a kilometro', () => {
    expect(length1.conversion("km")).to.be.equal(20);
  });
  it('comprobacion kilometro a hectometro', () => {
    expect(length1.conversion("hectometro")).to.be.equal(200);
  });
  it('comprobacion kilometro a decametro', () => {
    expect(length1.conversion("decametro")).to.be.equal(2000);
  });
  it('comprobacion kilometro a metro', () => {
    expect(length1.conversion("metro")).to.be.equal(20000);
  });
  it('comprobacion kilometro a decimetro', () => {
    expect(length1.conversion("decimetro")).to.be.equal(200000);
  });
  it('comprobacion kilometro a centimetro', () => {
    expect(length1.conversion("centimetro")).to.be.equal(2000000);
  });
  it('comprobacion kilometro a milimetro', () => {
    expect(length1.conversion("milimetro")).to.be.equal(20000000);
  });
  it('comprobacion pie a milla', () => {
    expect(length2.conversion("milla")).to.be.equal(0.003787878787878788);
  });
  it('comprobacion pie a metro', () => {
    expect(length2.conversion("metro")).to.be.equal(6.0960741282613995);
  });
  it('comprobacion pie a pie', () => {
    expect(length2.conversion("pie")).to.be.equal(20);
  });
  it('comprobacion milla a pie', () => {
    expect(length3.conversion("pie")).to.be.equal(105600);
  });
  it('comprobacion milla a metro', () => {
    expect(length3.conversion("metro")).to.be.equal(32186.94175772889);
  });
  it('comprobacion milla a milla', () => {
    expect(length3.conversion("milla")).to.be.equal(20);
  });
});