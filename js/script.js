// const elementName = document.getElementById('name');
// const elementSurname = document.getElementById('surname');
// const elementColor = document.getElementById('color');
// const elementNumber = document.getElementById('number');

// // assegnazione numero
// elementNumber.innerHTML = 130;

// // richiesta input al cliente
// elementName.innerHTML = prompt('Inserisci il tuo nome');
// elementSurname.innerHTML = prompt('Inserisci il tuo cognome');
// elementColor.innerHTML = prompt('Inserisci il tuo colore');

// const elementPassword = name + surname + color + number;
// console.log('password:', password);

// document.getElementById('password').innerHTML = 'La tua password è ' + password;



const elementName = document.getElementById('name');
const elementSurname = document.getElementById('surname');
const elementColor = document.getElementById('color');
const elementNumber = document.getElementById('number');

// assegnazione numero
const number = 130;
elementNumber.innerHTML = number;

// richiesta input al cliente
const name = prompt('Inserisci il tuo nome');
elementName.innerHTML = name;

const surname = prompt('Inserisci il tuo cognome');
elementSurname.innerHTML = surname;

const color = prompt('Inserisci il tuo colore');
elementColor.innerHTML = color;

const password = name + surname + color + number;
console.log('password:', password);

document.getElementById('password').innerHTML = 'La tua password è: ' + password;




