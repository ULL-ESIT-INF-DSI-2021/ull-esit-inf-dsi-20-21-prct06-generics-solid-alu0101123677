import 'chai';
import {expect} from 'chai';
import {Plantel} from '../../src/ejercicio-1/class_plantel';
import {DragonBall} from '../../src/ejercicio-1/subclass_dragonball';
import {StarWars} from '../../src/ejercicio-1/subclass_starwars';
import {Pokemon} from '../../src/ejercicio-1/subclass_pokemon';
import {Marvel} from '../../src/ejercicio-1/subclass_marvel';
import {DC} from '../../src/ejercicio-1/subclass_dc';

let DarthVader = new StarWars("Darth Vader", 1.0, 2.0, 30, 40, 10, 100, "Siente la fuerza");
let Superman = new DC("Superman", 1.0, 2.0, 30, 40, 10, 100, "Muere villano");
let Goku = new DragonBall("Goku", 1.0, 2.0, 30, 40, 10, 100, "Kame kame ha");
let Pikachu = new Pokemon("Pikachu", 1.0, 2.0, 30, 40, 10, 100, "pika pika");
let Spiderman = new Marvel("Spiderman", 1.0, 2.0, 30, 40, 10, 100, "Tú vecino y amigo spiderman");
let luchadores = [Superman, Goku, DarthVader, Pikachu, Spiderman];
let plantel = new Plantel(luchadores);

describe('check Plantel class', () => {
  it('comprobacion si plantel es de la clase Plantel', () => {
    expect(plantel).to.be.an.instanceOf(Plantel);
  });
});

describe('check choose function', () => {
  it('comprobacion si la funcion choose selecciona al luchador correcto, en este caso Superman ', () => {
    expect(plantel.choose("Superman")).to.be.an.instanceOf(DC);
  });
  it('comprobacion si la funcion choose selecciona al luchador correcto, en este caso Darth Vader ', () => {
    expect(plantel.choose("Darth Vader")).to.be.an.instanceOf(StarWars);
  });
  it('comprobacion si la funcion choose selecciona al luchador correcto, en este caso Pikachu ', () => {
    expect(plantel.choose("Pikachu")).to.be.an.instanceOf(Pokemon);
  });
  it('comprobacion si la funcion choose selecciona al luchador correcto, en este caso Goku ', () => {
    expect(plantel.choose("Goku")).to.be.an.instanceOf(DragonBall);
  });
  it('comprobacion si la funcion choose selecciona al luchador correcto, en este caso Spiderman ', () => {
    expect(plantel.choose("Spiderman")).to.be.an.instanceOf(Marvel);
  });
});

describe.only('check choose function', () => {
  it('comprobacion si la funcion push introduce correctamente luchadores ', () => {
    let IronMan = new Marvel("Iron Man", 1.0, 2.0, 30, 40, 10, 100, "Claramente no soy el típico heroe");
    expect(plantel.push(IronMan)).to.be.an.instanceOf(Marvel);
  });
});