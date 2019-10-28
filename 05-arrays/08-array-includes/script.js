/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];


    document.getElementById("run").addEventListener("click", () => {
        let wordToFind = "pomme";
        var existe = false;
        let findIt = fruits.find(function(item) {
            if (item === wordToFind) {
                existe = true;
            }
        });
        if (existe) {
            console.log("oui, le mot " + wordToFind + " existe bien dans le tableau");
        } else {
            console.log("non, le mot " + wordToFind + " n'existe pas dans le tableau");
        }

    })
})();