/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let coup = 1;

    function randomIt() {
        let randomnum = Math.floor(Math.random() * 100);
        console.log(randomnum);
        askMe(randomnum);
    }

    function askMe(chiffre = randomnum) {
        var askHim = prompt("Devine le nombre de 1-100");
        if (askHim < chiffre) {
            alert("Plus Haut");
            coup++;
            askMe(chiffre);
        } else if (askHim > chiffre) {
            alert("plus Bas");
            coup++;
            askMe(chiffre)
        } else {
            alert("Bravo vous avez trouvez le nombre :" + chiffre + " en " + coup + " coups");
            randomIt();
        }
    }
    randomIt();

})();