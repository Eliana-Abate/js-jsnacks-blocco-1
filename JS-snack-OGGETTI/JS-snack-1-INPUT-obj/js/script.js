/*
SNACK : Invece di modificare il peso con un prompt, proviamo a farlo con un input. Avremo bisogno di un bottone...
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




