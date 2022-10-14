/*  Consegna: chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

// chiedo all'utente di inserire una parola

function palindromeCheck(word) {
    const wordArray = word.split(''); /// converto la parola inserita dall'utente in un array
    const wordReverted = wordArray.reverse();// inverto l'ordine dei caratteri dell'array creata
    const checkWord = wordReverted.join(""); // riconverto l'array in una stringa

    // check finale
    if(word == checkWord){
        const palindrome = "Palindrome!"
        document.querySelector('h2').innerHTML = `${palindrome}`
    } else{
        const notPalindrome = "Not palindrome!"
        document.querySelector('h2').innerHTML = `${notPalindrome}`
    }

}

const btnElement = document.querySelector("button");
const inputElement = document.querySelector("input");

btnElement.addEventListener('click', function(){
    const userWord = inputElement.value
    palindromeCheck(userWord);
});
