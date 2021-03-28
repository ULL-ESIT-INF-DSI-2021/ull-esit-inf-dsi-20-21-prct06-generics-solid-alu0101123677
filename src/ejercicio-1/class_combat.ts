import {Fighter} from "./superclass_fighter"

export class Combat {
  constructor(private fighter1: Fighter, private fighter2: Fighter){}
}

export function lowEfficiency(attack: number, defense: number): number {
  if (attack <= 1)
    return 0;
  if (defense < 1)
    return 50 * attack * 0.5;
  return 50 * (attack / defense) * 0.5;
}

export function neutralEfficiency(attack: number, defense: number): number {
  if (attack < 1)
    return 0;
  if (defense < 1)
    return 50 * attack;
  return 50 * (attack / defense);
}

export function highEfficiency(attack: number, defense: number): number {
  if (attack < 1)
    return 0;
  if (defense < 1)
    return 50 * attack * 2;
  return 50 * (attack / defense) * 2;
}