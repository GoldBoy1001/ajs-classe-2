import Swordsman from '../swordsman';

test('Create Swordsman', () => {
  const character = 'name';
  const type = 'Swordsman';

  const expected = {
    name: 'name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const recevied = new Swordsman(character, type);

  expect(recevied).toEqual(expected);
});
