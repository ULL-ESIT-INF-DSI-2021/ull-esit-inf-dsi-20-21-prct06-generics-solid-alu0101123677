import 'chai';
import {expect} from 'chai';
import {Speed} from '../../src/ejercicio-2/class_speed';

describe('check Speed class', () => {
  let speed = new Speed(20, "kilometro por hora");
  it('comprobacion si speed es de la clase Speed', () => {
    expect(speed).to.be.an.instanceOf(Speed);
  });
});

describe('check conversion function', () => {
  let speed = new Speed(1, "kilometro por hora");
  let speed1 = new Speed(1, "milla por hora");
  let speed2 = new Speed(1, "metro por segundo");
  it('comprobacion kilometro por hora a kilometro por hora', () => {
    expect(speed.conversion("kilometro por hora")).to.be.equal(1);
  });
  it('comprobacion kilometro por hora a milla por hora', () => {
    expect(speed.conversion("milla por hora")).to.be.equal(0.6215040397762586);
  });
  it('comprobacion kilometro por hora a metro por segundo', () => {
    expect(speed.conversion("metro por segundo")).to.be.equal(0.2777777777777778);
  });
  it('comprobacion milla por hora a milla por hora', () => {
    expect(speed1.conversion("milla por hora")).to.be.equal(1);
  });
  it('comprobacion milla por hora a kilometro por hora', () => {
    expect(speed1.conversion("kilometro por hora")).to.be.equal(1.609);
  });
  it('comprobacion metro por segundo a metro por segundo', () => {
    expect(speed2.conversion("metro por segundo")).to.be.equal(1);
  });
  it('comprobacion metro por segundo a kilometro por hora', () => {
    expect(speed2.conversion("kilometro por hora")).to.be.equal(3.6);
  });
});