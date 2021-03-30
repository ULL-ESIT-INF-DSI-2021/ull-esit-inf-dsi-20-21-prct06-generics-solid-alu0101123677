import 'chai';
import {expect} from 'chai';
import {Time} from '../../src/ejercicio-2/class_time';

describe('check Time class', () => {
  let time = new Time(20, "hora");
  it('comprobacion si time es de la clase Time', () => {
    expect(time).to.be.an.instanceOf(Time);
  });
});


describe.only('check conversion function', () => {
  let time = new Time(1, "hora");
  let time1 = new Time(1, "minuto");
  let time2 = new Time(1, "segundo");
  it('comprobacion hora a hora', () => {
    expect(time.conversion("hora")).to.be.equal(1);
  });
  it('comprobacion hora a minuto', () => {
    expect(time.conversion("minuto")).to.be.equal(60);
  });
  it('comprobacion hora a segundo', () => {
    expect(time.conversion("segundo")).to.be.equal(3600);
  });
  it('comprobacion minuto a hora', () => {
    expect(time1.conversion("hora")).to.be.equal(0.016666666666666666);
  });
  it('comprobacion minuto a minuto', () => {
    expect(time1.conversion("minuto")).to.be.equal(1);
  });
  it('comprobacion minuto a segundo', () => {
    expect(time1.conversion("segundo")).to.be.equal(60);
  });
  it('comprobacion segundo a hora', () => {
    expect(time2.conversion("hora")).to.be.equal(0.0002777777777777778);
  });
  it('comprobacion segundo a minuto', () => {
    expect(time2.conversion("minuto")).to.be.equal(0.016666666666666666);
  });
  it('comprobacion segundo a segundo', () => {
    expect(time2.conversion("segundo")).to.be.equal(1);
  });
});