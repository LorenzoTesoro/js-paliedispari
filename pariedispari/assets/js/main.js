/* Consegna: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

const playerChoice = prompt('pari o dispari'); // L’utente sceglie pari o dispari
const playerNumber = Number(prompt("Scegli un numero da 1 a 5")); // inserisco un numero da 1 a 5
const pcNumber = Math.floor((Math.random() * 5) + 1); // Genero un numero random (sempre da 1 a 5)

// Sommo i due numeri e stabilisco se la somma dei due numeri è pari o dispari
function oddOrEven(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
    if(sum % 2 === 0){
        return "pari";
    } 
    return "dispari";
}
// Dichiaro chi ha vinto
if (playerChoice == oddOrEven(playerNumber, pcNumber)){
    console.log('Player1 wins!');
} else {
    console.log ('Pc wins!');
}

