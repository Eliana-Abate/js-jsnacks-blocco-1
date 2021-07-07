/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/ 


//! 1. Creo la variabile per chiedere il numero all'utente e la variabile per la somma
//! 2. Creo un ciclo per chiedere all'utente un numero per 5 volte
//! 3. All'interno del ciclo verifico che la variabile con cui chiedo il numero all'utente venga rispettata, ponendo la condizione che sia un numero

var userNumber;
var sum = 0;
console.log(sum);

for (var i = 1; i <= 5; i++) {
    userNumber = parseInt(prompt('Inserisci un numero'));
    
    if(!isNaN(userNumber)){
        sum += userNumber;
    }
}

console.log('numeri scelti dall\'utente: ', userNumber);
console.log('somma numeri utente: ', sum);


//! 4. Eseguo lo stesso ciclo con WHILE 
/*
var = 1; 
while (i <= 5) {
    userNumber = parseInt(prompt('Inserisci un numero (' + i + '/5)');
    
    if(!isNaN(userNumber)){
        sum += userNumber;
    }
   i++;
}

console.log('numeri scelti dall\'utente: ', userNumber);
console.log('somma numeri utente: ', sum);

*/