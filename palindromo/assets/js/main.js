/*  Consegna: chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

// chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');

function palindromeCheck(word) {
    const wordArray = word.split(''); // converto la parola inserita dall'utente in un array (string.split())
    const wordReverted = wordArray.reverse()// inverto l'ordine dei caratteri dell'array creata
    const checkWord = wordReverted.join(""); // riconverto l'array in una stringa

    // check finale
    if(word == checkWord){
        return "palindrome!";
    } 
    return "not palindrome!";
}

console.log(palindromeCheck(userWord));
