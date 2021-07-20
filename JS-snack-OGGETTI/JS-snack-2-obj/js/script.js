/*SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "nome", "città" "punti";
Stampiamo le squadre in pagina, all'interno di una tabella HTML
*/ 


var teams = [
    {nome: 'Juventus', city: 'Torino', punti: 10,},
    {nome: 'Roma', city: 'Roma', punti: 7,},
    {nome: 'Salernitana', city: 'Salerno', punti: 3,},
]; 

console.log(teams);


var displayTable = document.querySelector('#team-list tbody');

console.log(displayTable);

var tableText = '';

for (var i = 0; i < teams.length; i++) {
    var currentTeam = teams[i];
    tableText += '<tr>';
    tableText += '<td>' + currentTeam.nome +'</td>';
    tableText += '<td>' + currentTeam.city +'</td>';
    tableText += '<td>' + currentTeam.punti +'</td>';
    tableText += '<tr>';
}

displayTable.innerHTML = tableText;