/*Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/


//! 1. Creo due array, uno per i nomi e l'altro per i cognomi
//! 2. Creo due variabili per pescare un elemento random rispettivamente dalla lista dei nomi e da quella dei cognomi
//! 3. Creo una variabile per sommare le stringhe dei due elementi random pescati dalle rispettive liste
//! 4. Creo una lista vuota (array vuoto) in cui inserire i nomi dei partecipanti (al punto 6)
//! 5. Attraverso il ciclo WHILE pongo la condizione che lista vuota non conterrà più di 3 invitati
//TODO 5.1 - Metto le precedenti operazioni (punti 2,3) nel ciclo, affinché esse siano ripetute al massimo 3 volte (= generino al massimo 3 nominativi)
//! 6. All'interno del ciclo pongo la condizione che non ci siano duplicati e metto nell'array solo i nominativi che vengono estratti una volta sola


//! OPERZIONE 1 - Array
var firstName = [' Tizio', ' Caio', ' Sempronio'];
console.log('Lista nomi: ', firstName);

var lastName = [' Verdi', ' Bianchi', ' Rossi'];
console.log('Lista cognomi: ', lastName);

//! OPERAZIONE 4 
var partecipants = [];

//Print in Html 
var displayFirstName = document.getElementById('firstName-array');
displayFirstName.innerHTML = 'Lista Nomi: ' + firstName;

var displayLastName = document.getElementById('lastName-array');
displayLastName.innerHTML = 'Lista Cognomi: ' + lastName;

var displayPartecipants = document.getElementById('partecipants-list');


//! OPERAZIONE 5 
while (partecipants.length < 3) {
    //TODO 5.1
    //! OPERAZIONE 2 
    /*attraverso queste due variabili pescherò la posizione dell'elemento e la console stamperà l'indice*/
    var randomFirstName = Math.floor(Math.random() * firstName.length);
    console.log("posizione nome: ", randomFirstName);

    var randomLastName = Math.floor(Math.random() * lastName.length);
    console.log("posizione cognome: ", randomLastName);

    /*Il nome dell'elemento viene esplicitato attraverso la formula ARRAY[INDICE] = NOME ELEMENTO */
    var extractedFirstName = firstName[randomFirstName];
    var extractedLastName = lastName[randomLastName];


    //! OPERAZIONE 3 - Sommo le stringhe degli elementi pescati
    var fullNameExtracted = extractedFirstName + ' ' + extractedLastName;
    console.log('Nome partecipante: ', fullNameExtracted);

    if (!partecipants.includes(fullNameExtracted)) {
        console.log('ho inserito: ', fullNameExtracted);
        partecipants.push(fullNameExtracted);
    }
}

console.table(partecipants);
displayPartecipants.innerHTML = partecipants;
