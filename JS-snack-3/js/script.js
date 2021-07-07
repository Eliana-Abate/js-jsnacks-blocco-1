/*Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/


//! 1. Creo due array, uno per i nomi e l'altro per i cognomi
//! 2. Creo due variabili per pescare un elemento random rispettivamente dalla lista dei nomi e da quella dei cognomi
//! 3. Creo una variabile per sommare le stringhe dei due elementi random pescati dalle rispettive liste
//! 4. Creo un ciclo affinché vengano generati al massimo tre nominativi e pongo la condizione che non ci siano duplicati

//! 1 - Array
var firstName = ['Tizio', 'Caio', 'Sempronio'];
console.log('Lista nomi: ', firstName);

var lastName = ['Verdi', 'Bianchi', 'Rossi'];
console.log('Lista cognomi: ', lastName);



//! 2 
/*attraverso queste due variabili pescherò la posizione dell'elemento e la console stamperà l'indice*/
var randomFirstName = Math.floor(Math.random() * firstName.length);
console.log("posizione nome: ", randomFirstName);

var randomLastName = Math.floor(Math.random() * lastName.length);
console.log("posizione cognome: ", randomLastName);


/*Il nome dell'elemento viene esplicitato attraverso la formula ARRAY[INDICE] = NOME ELEMENTO */
var extractedFirstName = firstName[randomFirstName];
var extractedLastName = lastName[randomLastName];



//! 3 - Sommo le stringhe degli elementi pescati
var partecipants = extractedFirstName + ' ' + extractedLastName;
console.log('Nome partecipante: ', partecipants);
