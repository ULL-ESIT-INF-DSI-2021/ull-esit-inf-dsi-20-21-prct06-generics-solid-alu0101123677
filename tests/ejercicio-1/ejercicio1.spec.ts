import 'chai';
import {expect} from 'chai';
import {Plantel} from '../../src/ejercicio-1/class_plantel';
import {DragonBall} from '../../src/ejercicio-1/subclass_dragonball';
import {StarWars} from '../../src/ejercicio-1/subclass_starwars';
import {Pokemon} from '../../src/ejercicio-1/subclass_pokemon';
import {Marvel} from '../../src/ejercicio-1/subclass_marvel';
import {DC} from '../../src/ejercicio-1/subclass_dc';
import {ejercicio1} from '../../src/ejercicio-1/ejercicio1';


let DarthVader = new StarWars("Darth Vader", 2.03, 110.7, 70, 70, 30, 600, "No conoces el poder del Lado Oscuro");
let AnakinSkywalker = new StarWars("Anakin Skywalker", 1.80, 82.0, 80, 60, 50, 600, "Siente la fuerza");
let HanSolo = new StarWars("Han Solo", 1.8, 85.0, 50, 50, 70, 600, "Vamos Chewbacca");
let Superman = new DC("Superman", 1.9, 80.0, 80, 80, 80, 600, "Todo gran poder conlleva una gran responsabilidad");
let Flash = new DC("Flash", 1.87, 81.0, 100, 50, 150, 600, "No se trata de ser un héroe, se trata de hacer lo correcto");
let Batman = new DC("Batman", 1.88, 90.0, 60, 70, 50, 600, "A veces la locura es la que hace lo que somor");
let Goku = new DragonBall("Goku", 1.88, 80.0, 120, 70, 50, 600, "Kame kame ha");
let Vegeta = new DragonBall("Vegeta", 1.88, 80.0, 110, 80, 60, 600, "El ser durmiento dentro de mi se ha despertado");
let Freezer = new DragonBall("Freezer", 1.9, 85.0, 130, 60, 60, 600, "EL dolor que setiras será peor que estar en el infierno");
let Pikachu = new Pokemon("Pikachu", 0.4, 6.0, 50, 40, 50, 600, "pika pika");
let Charmander = new Pokemon("Charmander", 0.6, 8.5, 70, 30, 30, 600, "char char");
let Bulbasur = new Pokemon("Bulbasur", 0.7, 6.9, 50, 70, 20, 600, "bul bul");
let Spiderman = new Marvel("Spiderman", 1.8, 82.0, 60, 50, 100, 600, "Tú vecino y amigo spiderman");
let Wolverine = new Marvel("Wolverine", 1.9, 82.0, 50, 50, 50, 3000, "Soy el mejor en lo que hago");
let IronMan = new Marvel("Iron Man", 1.8, 80.0, 80, 50, 80, 600, "el traje y yo somos uno");

let luchadores = [Superman, Goku, DarthVader, Pikachu, Spiderman , AnakinSkywalker, HanSolo, Flash, Batman, Vegeta, Freezer, Charmander, Bulbasur, Wolverine, IronMan];
let plantel = new Plantel(luchadores);

describe('check ejercicio1 function', () => {
  it('comprobacion del ejercicio1 Spiderman vs Darth Vader', () => {
    expect(ejercicio1(plantel, "Spiderman", "Darth Vader")).to.be.eql("Darth Vader");
  });
  it('comprobacion del ejercicio1 Iron vs Darth Vader', () => {
    expect(ejercicio1(plantel, "Iron Man", "Darth Vader")).to.be.eql("Darth Vader");
  });
  it('comprobacion del ejercicio1 Wolverine vs Pikachu', () => {
    expect(ejercicio1(plantel, "Wolverine", "Pikachu")).to.be.eql("Wolverine");
  });
  it('comprobacion del ejercicio1 Wolverine vs Superman', () => {
    expect(ejercicio1(plantel, "Wolverine", "Superman")).to.be.eql("Wolverine");
  });
  it('comprobacion del ejercicio1 Han Solo vs Darth Vader', () => {
    expect(ejercicio1(plantel, "Han Solo", "Darth Vader")).to.be.eql("Darth Vader");
  });
  it('comprobacion del ejercicio1 Bulbasur vs Pikachu', () => {
    expect(ejercicio1(plantel, "Bulbasur", "Pikachu")).to.be.eql("Bulbasur");
  });
  it('comprobacion del ejercicio1 Flash vs Vegeta', () => {
    expect(ejercicio1(plantel, "Flash", "Vegeta")).to.be.eql("Vegeta");
  });
});

