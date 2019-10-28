/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    function randomIt(table, type) {
        switch (type) {
            case "t":
                return Math.floor(Math.random() * table.length);
                break;
            case "s":
                return Math.floor(Math.random() * table.size);
                break;
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        // on prend un numero au hasard qui correspondra à un nom d'oiseau et ou d'un adjectif
        //initialisation
        var randomBirds = randomIt(birds, "t"); //contient l'index du nom d'oiseau
        var birdName = birds[randomBirds].name; // contient le nom de l'oiseau
        var femOrNot = birds[randomBirds].fem; // contient la valeur féminine ou pas
        var randomAdj = randomIt(adjectives, "s"); // contient l'index de l'adjectif
        var adjArray = adjectives.values(); // contient toute les valeurs  de la table adjectifs
        var varToPrint = ""; // sert à contenir les itération de la table Set
        // on va itéré le nombre de fois (randomAdj) pour retrouver la valeur adjectives
        for (let i = 0; i <= randomAdj; i++) {
            varToPrint = adjArray.next().value;
            if (i == randomAdj) { // si l'index est atteint on garde la valeur
                var adjChoiced = varToPrint;
            }
        }
        var deb = "Le";
        if (femOrNot) { // si la valeur féminin existe on ajoute la touche féminine ;)
            deb = "La";
            adjChoiced += "e";
        }
        document.getElementById("target").innerHTML = deb + " " + birdName + " " + adjChoiced;
    })
})();