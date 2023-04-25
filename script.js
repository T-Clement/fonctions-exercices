// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");
// function textTocamelCase(text) {
    // itérer pour chaque mot à l'index 0 une majuscule
// }
function textTocamelCase(text) {
    let words = text.split(/[-,_\s]+/g);
    
    words = words.map(function(word, index) {
        if (index === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() +  word.slice(1).toLowerCase();
    })
    return words.join(" ");
    // const newWords = [];
    // words.forEach(word => {
    //     newWords.push(word.toLowerCase());
        
    // });
    // return newWords;




    // for (let i = 0; i < words.length; i++) {
    //     for (let j = 0; j < words[i]; j++) {
    //         words[i][j].toUpperCase();
    //     }
    // }
    // return words;

    // for (let word of words) {
    //     word = word.toUpperCase();
    //     console.log(word);
    //     // for (const index in word) {
    //     // }
    // }   

}
console.log(textTocamelCase("Cette phrase est un test"));

// -----------------------------------
console.log("2/ Implémentez une fonction qui retroune le plus grand mot d'un texte.");
function getLongestWord(string) {
    // let stringConverted = string.replace(/[^\w\s]+/g, '');
    let array = (string.replace(/[^\w\s]+/g, '')).split(" ");
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
console.log("Le mot le plus long est : ", getLongestWord("Ceci est une phrase de test qui vérifie si la fonction fonctionne."));

// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");
function putSecondesToTime(duration) {
    
//     let units = {
//         "secondes": 0,
//         "minutes": 0,
//         "hours": 0,
//         "days": 0,
//         "weeks": 0,
//         "years": 0
//     };
    
//     const secondsInYear = 31557600;
//     const secondsInWeek = 604800;
//     const secondsInDay = 86400;
//     const secondsInHour = 3600;
//     const secondsInMinute = 60;

//     while (duration >= 0) {
//         while (secondsInYear < duration) {
//             duration -= secondsInYear;
//             units["years"]++; 
//         }
//         while (secondsInWeek < duration) {
//             duration -= secondsInWeek;
//             units["weeks"]++;
//         }
//         while (secondsInDay < duration) {
//             duration -= secondsInDay;
//             units["days"]++;
//         }
//         while (secondsInHour < duration) {
//             duration -= secondsInHour;
//             units["hours"]++;
//         }
//         while (secondsInMinute < duration) {
//             duration -= secondsInMinute;
//             units["minutes"]++;
//         }
//         units["seconds"] = duration;

//     } return units;
// }

//     // let secondesInYears;
//     // let secondesInMinutes = secondes / 60;
//     // let secondesInHours = Math.floor(secondes / 3600);
//     // let secondesInDays = Math.floor(secondes / 86400);
//     // let secondesInYears = Math.floor(secondes / 31557600);
//     // let restingSecondes = secondesInMi;  
    
//     // console.table();

}


// units["secondes"]++;
// console.table(units);

console.table(putSecondesToTime(5222013554));

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");

console.log();

// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");
function countLetterInText() {

};
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