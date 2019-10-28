/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // on va chercheer la donnée entrer
        let nbFrDay = 0;
        let addToMessage = "";
        let monthFr = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre");

        for (let i = 0; i <= 11; i++) {
            let userYear = new Date(document.getElementById("year").value, i, 13);
            if (userYear.getDay() == 5) {
                addToMessage += "Le 13 " + monthFr[userYear.getMonth()] + "\n";
                nbFrDay++;
            }
        }
        message = "En " + document.getElementById("year").value + "\nil y a eu " + nbFrDay + " vendredi 13\n" + addToMessage;
        alert(message);
    }) const
})()