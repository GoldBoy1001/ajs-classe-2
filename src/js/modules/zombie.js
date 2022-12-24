import Character from './character';

export default class Zombie extends Character {
  constructor(character, type) {
    super(character, type);
    this.attack = 40;
    this.defence = 10;
  }
}
