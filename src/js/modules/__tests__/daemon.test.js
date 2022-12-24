import Daemon from '../daemon';

test('Create Bowerman', () => {
  const character = 'name';
  const type = 'Daemon';

  const expected = {
    name: 'name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const recevied = new Daemon(character, type);

  expect(recevied).toEqual(expected);
});
