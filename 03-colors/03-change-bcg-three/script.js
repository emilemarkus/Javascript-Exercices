/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // we need the creat a random number with the higher value #ffffff;
        var maxVal = parseInt("0xffffff");
        // we make our random number
        var randomVariable = Math.floor(Math.random() * maxVal);
        // we creat our color variable
        var randomColor = "#" + (randomVariable.toString(16));
        document.body.style.backgroundColor = randomColor;
    })

})();