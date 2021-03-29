export abstract class Fighter {
  constructor(protected name: string, protected height: number, protected weight: number,
    protected attack: number, protected defense: number, protected speed: number,
    protected healt: number, protected catching_phrase: string){}
  
  abstract getName(): string;
  abstract getHeight(): number;
  abstract getWeight(): number;
  abstract getAttack(): number;
  abstract getDefense(): number;
  abstract getSpeed(): number;
  abstract getHealt(): number;
  abstract getCatchingPhrase(): string;

  abstract setName(name: string);
  abstract setHeight(height: number);
  abstract setWeight(weight: number);
  abstract setAttack(attack: number);
  abstract setDefense(defense: number);
  abstract setSpeed(speed: number);
  abstract setHealt(healt: number);
  abstract setCatchingPhrase(catching_phrase: string);

}