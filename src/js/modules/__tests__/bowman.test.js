import Bowman from '../bowman';

test('Create Daemon', () => {
  const character = 'name';
  const type = 'Bowman';

  const expected = {
    name: 'name',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const recevied = new Bowman(character, type);

  expect(recevied).toEqual(expected);
});
