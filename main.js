/* programma per creare password
in base ai dati inseriti dall'utente*/
alert('Banvenuto/a! inserisci i dati richiesti e premi OK per creare una nuova password')

//user name request
let userFirstName = prompt('Scrivi il tuo nome');
console.log(userFirstName);

//user surname request
let userSurname = prompt('Scrivi il tuo cognome');
console.log(userSurname);

//user favorite color request
let userFavColor = prompt('Scrivi il tuo colore preferito');
console.log(userFavColor);

document.getElementById(pass).innerHTML = userFirstName + userSurname + userFavColor