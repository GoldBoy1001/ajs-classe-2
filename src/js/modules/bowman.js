import Character from './character';

export default class Bowman extends Character {
  constructor(character, type) {
    super(character, type);
    this.attack = 25;
    this.defence = 25;
  }
}
