    /* becode/javascript
     *
     * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
     *
     * coded by leny@BeCode
     * started at 26/10/2018
     */

    // NOTE: don't focus on the existing code structure for now.
    // You will have time to focus on it later.

    (() => {

        // retourne un nombre aléatoire pour remplir la table
        function randomNum(table) {
            return Math.floor(Math.random() * 100);
        }
        // evenement quand on click sur le bouton
        document.getElementById("run").addEventListener("click", () => {
            let newArray = new Array();
            let existe = false;
            let newRandom = 0;
            // on remplie la base 
            for (let i = 0; i < 10; i++) {
                newRandom = randomNum(newArray);
                //et on teste si il existe des doubles si oui on déincremente I
                if (newArray.indexOf(newRandom) < 0) {
                    newArray.push(newRandom);

                } else {
                    i--;
                }
            }
            // on trie la table
            newArray.sort((a, b) => a - b);
            // on remplie la table HTML
            for (let j = 0; j < 10; j++) {
                document.getElementById("n-" + (j + 1)).innerHTML = newArray[j];
            }

            document.getElementById("min").innerHTML = newArray[0];
            document.getElementById("max").innerHTML = newArray[newArray.length - 1];
            let sumOfAll = newArray.reduce((a, b) => a + b);
            document.getElementById("sum").innerHTML = sumOfAll;
            document.getElementById("average").innerHTML = sumOfAll / 10;


            console.log(newArray);
        })
    })()