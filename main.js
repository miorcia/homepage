const firstName = 'Emi';
const age = 30;
console.log(firstName, age);

console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector('h1');

console.log(header);

const czerwien = document.querySelector('.czerwony');

console.log(czerwien);

header.innerHTML = 'Co żem frontend';

console.log(header.style);

header.style.color = 'red';