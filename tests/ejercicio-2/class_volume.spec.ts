import 'chai';
import {expect} from 'chai';
import {Volume} from '../../src/ejercicio-2/class_volume';

describe('check Volume class', () => {
  let volume = new Volume(20, "metro cubico");
  it('comprobacion si volume es de la clase Volume', () => {
    expect(volume).to.be.an.instanceOf(Volume);
  });
});

describe('check conversion function', () => {
  let volume = new Volume(1, "metro cubico");
  let volume1 = new Volume(1, "decametro cubico");
  let volume2 = new Volume(1, "decimetro cubico");
  it('comprobacion metro cubico a metro cubico', () => {
    expect(volume.conversion("metro cubico")).to.be.equal(1);
  });
  it('comprobacion metro cubico decametro cubico', () => {
    expect(volume.conversion("decametro cubico")).to.be.equal(0.001);
  });
  it('comprobacion metro cubico a decimetro cubico', () => {
    expect(volume.conversion("decimetro cubico")).to.be.equal(1000);
  });
  it('comprobacion decametro cubico a metro cubico', () => {
    expect(volume1.conversion("metro cubico")).to.be.equal(1000);
  });
  it('comprobacion decametro cubico a decametro cubico', () => {
    expect(volume1.conversion("decametro cubico")).to.be.equal(1);
  });
  it('comprobacion decametro cubico a decimetro cubico', () => {
    expect(volume1.conversion("decimetro cubico")).to.be.equal(1000000);
  });
  it('comprobacion decimetro cubico a metro cubico', () => {
    expect(volume2.conversion("metro cubico")).to.be.equal(0.001);
  });
  it('comprobacion decimetro cubico a decametro cubico', () => {
    expect(volume2.conversion("decametro cubico")).to.be.equal(0.000001);
  });
  it('comprobacion decimetro cubico a decimetro cubico', () => {
    expect(volume2.conversion("decimetro cubico")).to.be.equal(1);
  });
});