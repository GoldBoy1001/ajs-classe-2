export default class Character {
  constructor(character, type) {
    if (character.length < 2 || character.length > 10) {
      throw new Error('Неверная длинна имени');
    } else {
      this.name = character;
    }
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Неверно указан тип');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    } else {
      this.level += 1;
      this.health = 100;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('А персонаж уже умер');
    }
  }
}
