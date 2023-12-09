const Chance = require('chance');

const chance = new Chance();

const randomName = chance.name();
const randomAge = chance.age();
const randomEmail = chance.email();

console.log('Nombre aleatorio: ', randomName);
console.log('Edad aleatoria: ', randomAge);
console.log('Email aleatorio: ', randomEmail);