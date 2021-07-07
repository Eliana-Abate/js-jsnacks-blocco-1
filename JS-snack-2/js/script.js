/*Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo (modificato) 
*/ 

//! 1. Creo la variabile per chiedere il numero all'utente
//! 2. Creo un ciclo DO-WHILE per chiedere all'utente il numero, ponendo la condizione di ripetere l'operazione finché il valore inserito non corrisponda a una cifra
//! 3. Pongo la condizione che se il numero inserito dall'utente sarà pari, verrà stampato. Altrimenti verrà stampato il numero successivo a quello inserito dall'utente

var userNumber = 0;
do {
    userNumber = parseInt(prompt('Inserisci un numero'));
} while (isNaN(userNumber)); 


if (userNumber % 2 === 0){
    console.log('numero scelto dall\'utente: ', userNumber);
} else {
    console.log('numero successivo a quello scelto: ', userNumber + 1);
}