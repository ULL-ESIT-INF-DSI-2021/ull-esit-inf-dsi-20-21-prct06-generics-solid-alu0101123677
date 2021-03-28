export abstract class Fighter {
  constructor(protected name: string, protected height: number, protected weight: number,
    protected attack: number, protected defense: number, protected catching_phrase: string){}
  
  abstract getName(): string;
  abstract getHeight(): number;
  abstract getWeight(): number;
  abstract getAttack(): number;
  abstract getDefense(): number;
  abstract getCatchingPhrase(): string;
}