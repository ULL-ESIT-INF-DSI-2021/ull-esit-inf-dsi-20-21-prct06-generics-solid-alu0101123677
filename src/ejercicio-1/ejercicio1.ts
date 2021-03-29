import {Plantel} from './class_plantel';
import {Combat} from './class_combat';
import {DragonBall} from './subclass_dragonball';
import {StarWars} from './subclass_starwars';
import {Pokemon} from './subclass_pokemon';
import {Marvel} from './subclass_marvel';
import {DC} from './subclass_dc';


export function ejercicio1(plantel: Plantel, name1: string, name2: string): string{
  let fighter1 = plantel.choose(name1);
  let fighter2 = plantel.choose(name2);
  let combat = new Combat(fighter1, fighter2);
  let winner: string = combat.start();
  return winner;
}