/* Consegna: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// 1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 - prompt
const playerChoice = prompt('pari o dispari');
const playerNumber = Number(prompt("Scegli un numero da 1 a 5"));
const pcNumber = Math.floor((Math.random() * 5) + 1);
// 3. Sommiamo i due numeri (n inserito dall'utente + n casuale)
const sum = playerNumber + pcNumber;
// 4. Stabiliamo se la somma dei due numeri è pari o dispari
function oddOrEven(number) {
    if(number % 2 === 0){
        return "pari";
    } 
    return "dispari";
}
// console.log(sum);
// console.log(oddOrEven(sum)); 

// dichiaro chi ha vinto
if (playerChoice == oddOrEven(sum)){
    console.log('Player1 wins!');
} else {
    console.log ('Pc wins!');
}

