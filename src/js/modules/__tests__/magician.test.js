import Magician from '../magician';

test('Create Magician', () => {
  const character = 'name';
  const type = 'Magician';

  const expected = {
    name: 'name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const recevied = new Magician(character, type);

  expect(recevied).toEqual(expected);
});
