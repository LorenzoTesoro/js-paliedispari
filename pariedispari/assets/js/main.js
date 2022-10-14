/* Consegna: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// 1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 - prompt
const playerChoice = prompt("Pari o dispari?");
const playerNumber = Number(prompt("Scegli un numero da 1 a 5"));
const pcNumber = Math.floor((Math.random() * 5) + 1);

// 3. Sommiamo i due numeri (n inserito dall'utente + n casuale)
const sum = playerNumber + pcNumber;
// console.log(sum);

// 4. Stabiliamo se la somma dei due numeri è pari o dispari
function oddOrEven(number) {
    if(number % 2 === 0){
        return true;
    } 
    return false;
}

/* if(sum % 2 === 0){
    console.log("la somma è pari");
} else {
    console.log("la somma è dispari");
} */

// 5. Dichiariamo chi ha vinto.
