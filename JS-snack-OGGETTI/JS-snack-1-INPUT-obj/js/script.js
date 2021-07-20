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


var palla = {nome: 'palla', peso: 10,}


var displayPalla = document.getElementById('palla');
var getInput = document.getElementById('peso-palla');
var button = document.getElementById('invio-btn');

var propPalla = '';

for (var key in palla) {
    propPalla += '<li>' + key + ': ' + palla[key] + '</li>';
}

displayPalla.innerHTML = propPalla;
  

button.addEventListener('click', function (){

    var newInput =  getInput.value;

    if(!newInput || isNaN(newInput) || newInput === '' || newInput < 0){
        alert('Hai inserito valori non validi');
    }
    
    palla['peso'] = parseInt(newInput);

    
    for (var key in palla) {
        propPalla += '<li>' + key + ': ' + palla[key] + '</li>';
    }

    displayPalla.innerHTML = propPalla;
});




