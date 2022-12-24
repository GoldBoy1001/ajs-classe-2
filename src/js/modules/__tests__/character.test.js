import Bowman from '../bowman';
import Character from '../character';

test('Create Character', () => {
  const name = 'name';
  const type = 'Bowman';

  const expected = {
    name,
    type,
    health: 100,
    level: 1,
  };

  const recevied = new Character(name, type);

  expect(recevied).toEqual(expected);
});

test('Error Character big length', () => {
  const name = '12345678910';
  const type = 'Bowman';

  expect(() => new Character(name, type)).toThrow(new Error('Неверная длинна имени'));
});

test('Error Character small length', () => {
  const name = '1';
  const type = 'Bowman';

  expect(() => new Character(name, type)).toThrow(new Error('Неверная длинна имени'));
});

test('Error Character type', () => {
  const name = 'name';
  const type = 'Bow';

  expect(() => new Character(name, type)).toThrow(new Error('Неверно указан тип'));
});

test('Error health = 0', () => {
  const character = new Bowman('name', 'Bowman');
  character.health = 0;

  expect(() => character.levelUp()).toThrow();
});

test('levelUp', () => {
  const character = new Bowman('name', 'Bowman');
  character.levelUp();

  expect(character.level).toEqual(2);
});

test('damage to health > 0', () => {
  const character = new Bowman('name', 'Bowman');
  character.damage(10);

  expect(92.5).toEqual(character.health);
});

test('damage to health < 0', () => {
  const character = new Bowman('name', 'Bowman');
  character.health = -1;

  expect(() => character.damage(10)).toThrow();
});
