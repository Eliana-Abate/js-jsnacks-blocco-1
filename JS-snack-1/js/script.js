/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/ 


//! 1. Creo la variabile per chiedere il numero all'utente e la variabile per la somma
//! 2. Creo un ciclo per chiedere all'utente un numero per 5 volte
//! 3. All'interno del ciclo verifico che la variabile con cui chiedo il numero all'utente venga rispettata, ponendo la condizione che sia un numero


//! 1
var userNumber;
var sum = 0;
console.log(sum);


//Print in Html 
var numbersList = [];

var displayUserNumber = document.getElementById('user-choices');
var displaySum = document.getElementById('numbers-sum');


//! 2
for (var i = 1; i <= 5; i++) {
    userNumber = parseInt(prompt('Inserisci un numero'));
    console.log('numeri scelti dall\'utente: ', userNumber);
    numbersList.push(userNumber);
    displayUserNumber.innerHTML = '[ ' + numbersList + ' ]' ;
    
    //! 3
    if(!isNaN(userNumber)){
        sum += userNumber;
        displaySum.innerHTML = sum;
    }
}

console.log('somma numeri utente: ', sum);


//! 4. Eseguo lo stesso ciclo con WHILE 
/*
var = 1; 
while (i <= 5) {
    userNumber = parseInt(prompt('Inserisci un numero'));
    console.log('numeri scelti dall\'utente: ', userNumber);  
    
    if(!isNaN(userNumber)){
        sum += userNumber;
    }
   i++;
}

console.log('somma numeri utente: ', sum);

*/