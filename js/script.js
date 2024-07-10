const elementName = document.getElementById('name');
const elementSurname = document.getElementById('surname');
const elementColor = document.getElementById('color');
const elementNumber = document.getElementById('number');

// assegnazione numero
elementNumber.innerHTML = 130;

// richiesta input al cliente
elementName.innerHTML = prompt('Inserisci il tuo nome');
elementSurname.innerHTML = prompt('Inserisci il tuo cognome');
elementColor.innerHTML = prompt('Inserisci il tuo colore');




