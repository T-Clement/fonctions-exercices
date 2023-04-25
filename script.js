// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");
// function textTocamelCase(text) {
    // itérer pour chaque mot à l'index 0 une majuscule
// }
console.log();

// -----------------------------------
console.log("2/ Implémentez une fonction qui retroune le plus grand mot d'un texte.");
function getLongestWord(string) {
    stringConverted = string.replace(/[^\w\s]+/g, '');
    let array = stringConverted.split(" ");
    let maxLength = 0;
    let longestWord = ""; 
    for (const word of array) {
        length = word.length;
        if (maxLength < length) {
            maxLength = length;
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(getLongestWord("Ceci est une phrase de test qui vérifie si la fonction fonctionne."));

// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");


console.log();

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");

console.log();

// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");

console.log();

// -----------------------------------
console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");

console.log();

// -----------------------------------
console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

const players  = {
    Camille: 88,
    Lola: 125,
    Isaac: 174,
    Aldrick: 426,
    Ismaël: 248,
    Lilian: 478,
    Charley: 225,
    Thierry: 255,
    Cameron: 205,
    Tanguy: 155,
    Jenny: 125
};

console.log();

// -----------------------------------
console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

console.log();