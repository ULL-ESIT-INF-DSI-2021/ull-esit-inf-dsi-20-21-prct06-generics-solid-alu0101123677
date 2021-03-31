import 'chai';
import {expect} from 'chai';
import {Documentary} from '../../src/ejercicio-3/class_documentary';

describe('check Documentary class', () => {
  let Cosmos = new Documentary("Cosmos: Una odisea de tiempo y espacio", "Ann Druyan", "Neil deGrasse Tyson", 2014);
  it('comprobacion si Cosmos es de la clase Documentary', () => {
    expect(Cosmos).to.be.an.instanceOf(Documentary);
  });
});