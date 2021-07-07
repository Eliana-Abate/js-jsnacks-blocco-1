/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

//! 1. Creo due liste (array) di elementi di lunghezza differente
//! 2. Creo due variabili per pescare elementi casuali dai due array;
//! 3. Creo un ciclo WHILE per ciascun array. Stabilisco la condizione di ripetere l'operazione di estrazione random finché la lunghezza dei due array non sarà uguale 
//! 4. All'interno del ciclo pongo la condizione che gli elementi verranno pushati nell'array SOLO SE presi una volta


//! 1 - Array
var firstArray = [' a', ' b', ' c', ' d', ' f', ' g'];
console.log('firstarray: ', firstArray);

var secondArray = [' h', ' i'];
console.log('secondarray: ', secondArray);

//Print in Html
var display1stArray = document.getElementById('first-array');
display1stArray.innerHTML = 'First Array: [' + firstArray + ' ]';

var display2ndArray = document.getElementById('second-array');
display2ndArray.innerHTML = 'Second Array: [' + secondArray + ' ]';

var increasedArray1 = document.getElementById('increased-array-1');

var increasedArray2 = document.getElementById('increased-array-2');



//! 3 - Ciclo per secondArray.length < firstArray.length
while (secondArray.length < firstArray.length) {
    //! Operazione 2
    var randomFirstArray = Math.floor(Math.random() * firstArray.length);
    console.log('posizione elemento estratto da firstArray: ', randomFirstArray);

    var extractedFirstArray = firstArray[randomFirstArray];
    console.log('nome elemento estratto da firstArray: ', extractedFirstArray);

    
    //! Operazione 4
   if (!secondArray.includes(extractedFirstArray)) {
       secondArray.push(extractedFirstArray);
       console.log('ho inserito: ', extractedFirstArray);
    }
}


//! 3 - Ciclo per secondArray.length > firstArray.length
while (secondArray.length > firstArray.length) {
    //! Operazione 2
    var randomSecondArray = Math.floor(Math.random() * secondArray.length);
    console.log('posizione elemento estratto da secondArray: ', randomSecondArray);

    var extractedSecondArray = secondArray[randomSecondArray];
    console.log('nome elemento estratto da secondArray: ', extractedSecondArray);

   
    //! Operazione 4
   if (!firstArray.includes(extractedSecondArray)) {
       firstArray.push(extractedSecondArray);
       console.log('ho inserito: ', extractedSecondArray);
    }
}

console.table(firstArray);
increasedArray1.innerHTML = 'First Array: [' + firstArray + ' ]';

console.table(secondArray);
increasedArray2.innerHTML = 'Second Array: [' + secondArray + ' ]';
