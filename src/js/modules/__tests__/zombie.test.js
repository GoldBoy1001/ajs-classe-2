import Zombie from '../zombie';

test('Create Zombie', () => {
  const character = 'name';
  const type = 'Zombie';

  const expected = {
    name: 'name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const recevied = new Zombie(character, type);

  expect(recevied).toEqual(expected);
});
