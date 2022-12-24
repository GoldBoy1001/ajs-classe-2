/* eslint-disable no-console */

import Bowman from './modules/bowman';
import Swordsman from './modules/swordsman';
import Magician from './modules/magician';
import Daemon from './modules/daemon';
import Undead from './modules/undead';
import Zombie from './modules/zombie';

const bowman = new Bowman('Леголас');
const swordsman = new Swordsman('Арагорн');
const magician = new Magician('Гэндальф');
const daemon = new Daemon('Ангмара');
const undead = new Undead('Саурон');
const zombie = new Zombie('Азог');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);
