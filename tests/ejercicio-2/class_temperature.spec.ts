import 'chai';
import {expect} from 'chai';
import {Temperature} from '../../src/ejercicio-2/class_temperature';

describe('check Temperature class', () => {
  let temperature = new Temperature(20, "grados celsius");
  it('comprobacion si temperature es de la clase Temperature', () => {
    expect(temperature).to.be.an.instanceOf(Temperature);
  });
});

describe('check conversion function', () => {
  let temperature = new Temperature(0, "grados celsius");
  let temperature1 = new Temperature(0, "grados fahrenheit");
  let temperature2 = new Temperature(0, "kelvin");
  it('comprobacion grados celsisus a grados celsius', () => {
    expect(temperature.conversion("grados celsius")).to.be.equal(0);
  });
  it('comprobacion grados celsius a grados fahrenheit', () => {
    expect(temperature.conversion("grados fahrenheit")).to.be.equal(32);
  });
  it('comprobacion grados celsius a kelvin', () => {
    expect(temperature.conversion("kelvin")).to.be.equal(273.15);
  });
  it('comprobacion grados fahrenheit a grados celsius', () => {
    expect(temperature1.conversion("grados celsius")).to.be.equal(-17.77777777777778);
  });
  it('comprobacion grados fahrenheit a grados fahrenheit', () => {
    expect(temperature1.conversion("grados fahrenheit")).to.be.equal(0);
  });
  it('comprobacion grados fahrenheit a kelvin', () => {
    expect(temperature1.conversion("kelvin")).to.be.equal(255.3722222222222);
  });
  it('comprobacion kelvin a grados celsius', () => {
    expect(temperature2.conversion("grados celsius")).to.be.equal(-273.15);
  });
  it('comprobacion kelvin a grados fahrenheit', () => {
    expect(temperature2.conversion("grados fahrenheit")).to.be.equal(-459.66999999999996);
  });
  it('comprobacion kelvin a kelvin', () => {
    expect(temperature2.conversion("kelvin")).to.be.equal(0);
  });
});