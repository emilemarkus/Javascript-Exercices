/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    varSess = sessionStorage.getItem('numClick');
    console.log(varSess);
    if (!(varSess)) varSess = 0;
    document.getElementById("target").textContent = varSess;
    //console.log(sessionStorage.getItem('numClick'));
    document.getElementById("increment").addEventListener("mouseup", () => {
        varSess++;
        var newNumClick = document.getElementById("target").textContent = varSess;
        console.log();
        varSess
        sessionStorage.setItem('numClick', varSess);
    })
})();