/* programma per creare password
in base ai dati inseriti dall'utente*/
alert('Banvenuto/a! inserisci i dati richiesti e premi OK per creare una nuova password')

//anno corrente
const actualYear = 21;

//user name request
let userFirstName = prompt('Scrivi il tuo nome');
console.log(userFirstName);

//user surname request
let userSurname = prompt('Scrivi il tuo cognome');
console.log(userSurname);

//user favorite color request
let userFavColor = prompt('Scrivi il tuo colore preferito');
console.log(userFavColor);

document.writeln('Ecco la tua nuova password')

document.writeln('Grazie, a presto!')
document.getElementById('pass').innerHTML = userFirstName + userSurname + userFavColor + actualYear;