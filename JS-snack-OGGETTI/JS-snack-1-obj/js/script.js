/*
SNACK: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione
*/ 


var palla = {
    nome: 'palla',
    peso: 10,
}

console.log(palla);

var displayPalla = document.getElementById('palla');
var propPalla = '';

/*for (var key in palla) {
    var currentElement = palla[key];
    propPalla += '<li>' + key + ': ' + palla[key] + '</li>';
}

displayPalla.innerHTML = propPalla;*/



var weightChoice = prompt('Inserisci il peso della palla');

palla['peso'] = parseInt(weightChoice);

for (var key in palla) {
    var currentElement = palla[key];
    propPalla += '<li>' + key + ': ' + palla[key] + '</li>';
}

displayPalla.innerHTML = propPalla;




