import {Plantel} from './class_plantel';
import {Combat} from './class_combat';
import {DragonBall} from './subclass_dragonball';
import {StarWars} from './subclass_starwars';
import {Pokemon} from './subclass_pokemon';
import {Marvel} from './subclass_marvel';
import {DC} from './subclass_dc';

/**
 * Función planteada para hacer el recorrido completo del ejercicio1 desde las pruebas unitarias
 * @param plantel objeto de la clase Plantel donde se encuentran todos los luchadores
 * @param name1 String que contiene el nombre del primer luchador
 * @param name2 String que contiene el nombre del segundo luchador
 * @returns un String con el nombre del ganador
 */
export function ejercicio1(plantel: Plantel, name1: string, name2: string): string{
  let fighter1 = plantel.choose(name1);
  let fighter2 = plantel.choose(name2);
  let combat = new Combat(fighter1, fighter2);
  let winner: string = combat.start();
  return winner;
}