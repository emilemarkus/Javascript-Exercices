/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    function aff() {
        // we erase the first and last element of the array
        fruits.splice(0, 1, "banane");
        fruits.splice(9, 1, "kiwi");
        var message = "";
        fruits.forEach(element => {
            message += element + "\n";
        });

        console.log(message);
    }
    document.getElementById("run").addEventListener("click", () => {
        aff();
    })
})();